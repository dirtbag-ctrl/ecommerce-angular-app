import { AppUser } from './../models/app-user';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { switchMap, map} from "rxjs/operators";
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardAuthService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  // guard admin routes 
  canActivate() : Observable<boolean> {
    return this.auth.appUser$.pipe(
      map(AppUser => AppUser.isAdmin))

    
  }

}
