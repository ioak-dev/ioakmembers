import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  profileForm: UntypedFormGroup = new UntypedFormGroup({
    firstName: new UntypedFormControl('',Validators.required),
    lastName: new UntypedFormControl('',Validators.required),
    email: new UntypedFormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    phoneNumber: new UntypedFormControl('',Validators.required),
    education: new UntypedFormControl('',Validators.required),
    department: new UntypedFormControl('',Validators.required),
    jobTitle: new UntypedFormControl('',Validators.required),
    about: new UntypedFormControl('',Validators.required),
  });
  userDetails: any = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    education:'',
    department:'',
    jobTitle:'',
    about:''
  };
  constructor(private formBuilder: UntypedFormBuilder, private router: Router) {}

  ngOnInit() {}

  updateProfile() {
    this.router.navigate(['/member-list']);
  }
}
