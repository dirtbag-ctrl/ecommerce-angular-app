import { Product } from './../models/product';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  // insert a new product into product object
  create(product) {
    return this.db.list('/products').push(product);
  }

  // get all products from db 
  getAllProducts() {
    return this.db.list('/products').snapshotChanges()
     .pipe(
       map(actions => 
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() as Product}) ))
     );
  }

  // get single product
  getProduct(productId) {
      return this.db.object('/products/' + productId).valueChanges();
  }

  // update a product 
  update(productId, product) {
   return this.db.object('/products/' + productId).update(product);
  }

  // deletes a product
  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
