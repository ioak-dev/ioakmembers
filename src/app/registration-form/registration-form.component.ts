import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
    ),
    phoneNumber: new FormControl('', Validators.required),
    experienceSince: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    profilePic: new FormControl(''),
  });
  userDetails: any = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    experienceSince: '',
    department: '',
    jobTitle: '',
    about: '',
    profilePic: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit() {}

  updateProfile() {
    this.appService.updateMember(this.userDetails).subscribe((result)=>{
      console.log(result)
      this.router.navigate(['/member-list']);
    })
  }
}
