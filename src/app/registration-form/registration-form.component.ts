import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    phoneNumber: new FormControl('',Validators.required),
    education: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    jobTitle: new FormControl('',Validators.required),
    about: new FormControl('',Validators.required),
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
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {}

  updateProfile() {
    this.router.navigate(['/members-list']);
  }
}
