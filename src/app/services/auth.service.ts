import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth) {
    // gets display name of user 
    this.user$ = afAuth.authState;
  }

  // Logs in user
  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  // Logs out user 
  logout() {
    this.afAuth.signOut();

  }
}
