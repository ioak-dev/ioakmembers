import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InitializationService } from './initialization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  memberId: any;
  loggedIn: boolean = false;
  loggedInUser: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private initializationService: InitializationService
  ) {
    this.initializationService.loggedInUser$.subscribe((result) => {
      this.loggedInUser = result;
    });
  }

  isLoggedIn(MemberId: any) {
    const id = sessionStorage.getItem('memberId');
    if (!id) {
      this.router.navigate(['/login']);
    } else if (MemberId == id) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.router.navigate(['/unauthorized']);
    }
    return this.loggedIn;
  }
}
