import { AppUser } from './../models/app-user';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) {  }

  // store users in firebase database
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    })
  }

  // gets specified user
  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  } 
}
