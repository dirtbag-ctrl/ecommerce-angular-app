import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserService) {
    // gets display name of user 
    this.user$ = afAuth.authState;
  }

  // Logs in user
  login() {
    // stores user url 
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then();

  }

  // Logs out user 
  logout() {
    this.afAuth.signOut();

  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user => {
        if(user) return this.userService.get(user.uid).valueChanges();

        return of(null);

      })
    );
  
  }
}
