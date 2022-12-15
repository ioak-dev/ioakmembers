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
import { Router } from '@angular/router';
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
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    public dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<LoginFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private appService: AppService,
    private router: Router,
    private initializationService: InitializationService
  ) {}

  ngOnInit(): void {
    console.log(this.loginForm.invalid, this.loginForm);
  }

  close() {
    this.dialogRef.close();
  }

  signIn() {
    this.appService.signIn(this.login).subscribe((result) => {
      sessionStorage.setItem('memberId', result.memberId);
      sessionStorage.setItem('firstName', result.firstName);
      sessionStorage.setItem('lastName', result.lastName);
      sessionStorage.setItem('email', result.email);
      sessionStorage.setItem('profilePic', result.profilePic);
      sessionStorage.setItem('token', result.token);
      this.initializationService.loggedInUser$.next(result);
      this.router.navigate(['/member-list']);
    });
  }
}
