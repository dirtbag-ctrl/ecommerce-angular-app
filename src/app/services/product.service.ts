import { AngularFireDatabase } from '@angular/fire/database';
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
    .pipe(map( action => action
      .map(a => {
        const key = a.payload.key;
        const data = a.payload.val();
        return  data;
      })));
  }
}
