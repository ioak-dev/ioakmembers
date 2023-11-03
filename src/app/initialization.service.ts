import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    profilePic: '',
    user_id: '',
    token: '',
  };
  loggedInUser$ = new BehaviorSubject(null);
  constructor() {
    this.loggedInUser$.subscribe((data) => {
      this.user = data;
    });
    if (sessionStorage.getItem('memberId')) {
      let loggedInUser: any = {
        firstName: '',
        lastName: '',
        email: '',
        profilePic: '',
        user_id: '',
        token: '',
      };
      loggedInUser.name = sessionStorage.getItem('name');
      loggedInUser.family_name = sessionStorage.getItem('family_name');
      loggedInUser.email = sessionStorage.getItem('email');
      loggedInUser.profilePic = sessionStorage.getItem('profilePic');
      loggedInUser.user_id = sessionStorage.getItem('memberId');
      loggedInUser.token = sessionStorage.getItem('token');
      this.user = { ...loggedInUser };
    } else {
      this.user = null;
    }
    this.loggedInUser$.next(this.user);
  }
}
