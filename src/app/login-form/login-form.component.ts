import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { AppService } from '../app.service';
import { InitializationService } from '../initialization.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  login = {
    email: '',
    password: '',
  };
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      Validators.required,
    ]),
    password: new FormControl('', Validators.required),
  });
  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
  });
  isHideLogo = false;
  returnUrl: any;
  errorMessage: any;
  isForgotPassword: boolean = false;
  forgotPasswordEmail: any;

  constructor(
    public dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<LoginFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private appService: AppService,
    private router: Router,
    private initializationService: InitializationService,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(): void {
    console.log(this.loginForm.invalid, this.loginForm);
  }

  close() {
    this.dialogRef.close();
  }

  openforgotPwd() {
    this.isForgotPassword = true;
  }

  reset() {
    const email = {
      email: this.forgotPasswordEmail,
    };
    this.appService.forgotPassword(email).subscribe(
      (result) => {
        this.isForgotPassword = false;
        this.errorMessage=null;
      },
      (error) => {
        if (error.status == 404) this.errorMessage = 'Enter valid email id';
      }
    );
  }

  signIn() {
    this.appService.signIn(this.login).subscribe(
      (result) => {
        sessionStorage.setItem('memberId', result.memberId);
        sessionStorage.setItem('firstName', result.firstName);
        sessionStorage.setItem('lastName', result.lastName);
        sessionStorage.setItem('email', result.email);
        sessionStorage.setItem('profilePic', result.profilePic);
        sessionStorage.setItem('token', result.token);
        this.initializationService.loggedInUser$.next(result);
        if (this.returnUrl) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.router.navigate(['/member-list']);
        }
      },
      (error) => {
        console.log(error?.error?.error?.message);
        this.errorMessage = error?.error?.error?.message;
      }
    );
  }
}
