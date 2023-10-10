import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { InitializationService } from '../initialization.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  errorMessage: any;
  changePassword = {
    oldPassword: '',
    newPassword: '',
  };

  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
  });

  constructor(
    private appService: AppService,
    private router: Router,
    private initializationService: InitializationService
  ) {}

  reset() {
    // if (this.checkPassword()) {
      const passwordObj = this.changePassword;
      this.appService.changePassword(passwordObj).subscribe((result) => {
        console.log(result);
        this.logout();
      });
    // }
  }

  // checkPassword() {
  //   if (
  //     this.changePassword.newPassword === this.changePassword.confirmPassword
  //   ) {
  //     return true;
  //   } else {
  //     this.errorMessage = 'Password mismatch';
  //     return false;
  //   }
  // }

  logout() {
    sessionStorage.clear();
    this.initializationService.loggedInUser$.next(null);
    this.router.navigate(['/login']);
  }
}
