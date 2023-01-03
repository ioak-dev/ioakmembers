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
    memberId: '',
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
        memberId: '',
        token: '',
      };
      loggedInUser.firstName = sessionStorage.getItem('firstName');
      loggedInUser.lastName = sessionStorage.getItem('lastName');
      loggedInUser.email = sessionStorage.getItem('email');
      loggedInUser.profilePic = sessionStorage.getItem('profilePic');
      loggedInUser.memberId = sessionStorage.getItem('memberId');
      loggedInUser.token = sessionStorage.getItem('token');
      this.user = { ...loggedInUser };
    } else {
      this.user = null;
    }
    this.loggedInUser$.next(this.user);
  }
}
