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
    if (sessionStorage.getItem('memberId')) {
      this.user.firstName = sessionStorage.getItem('firstName');
      this.user.lastName = sessionStorage.getItem('lastName');
      this.user.email = sessionStorage.getItem('email');
      this.user.profilePic = sessionStorage.getItem('profilePic');
      this.user.memberId = sessionStorage.getItem('memberId');
      this.user.token = sessionStorage.getItem('token');
    } else {
      this.user = null;
    }
    this.loggedInUser$ = new BehaviorSubject(this.user);
  }
}
