import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db : AngularFireDatabase) { }

  // get list of categories from firebase db
  getCategories () {
     return  this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();
   
  }
}
