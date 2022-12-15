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
import { AppService } from '../app.service';

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
    private appService: AppService
  ) {}

  ngOnInit(): void {
    console.log(this.loginForm.invalid, this.loginForm);
  }

  close() {
    this.dialogRef.close();
  }

  signIn() {
    console.log(this.login);
    this.appService.signIn(this.login).subscribe((result) => {
      console.log(result);
    });
  }
}
