import { Component, Input, OnInit } from '@angular/core';
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
    telephone: new FormControl('', Validators.required),
    experienceSince: new FormControl('', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    profilePic: new FormControl(''),
    linkedin: new FormControl(''),
    github: new FormControl(''),
    country: new FormControl(''),
  });
  // userDetails: any = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phoneNumber: '',
  //   experienceSince: '',
  //   jobTitle: '',
  //   about: '',
  //   profilePic: '',
  // };
  @Input() userDetails: any;
  public monthAndYear: Date;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit() {}

  updateProfile() {
    console.log(this.userDetails);
    const id = this.userDetails._id;
    this.appService.editMember(id, this.userDetails).subscribe((result) => {
      this.router.navigate([`/member/${this.userDetails.memberId}`]);
    });
  }

  changeDate(event: any) {
    this.userDetails.experienceSince = event;
  }
}
