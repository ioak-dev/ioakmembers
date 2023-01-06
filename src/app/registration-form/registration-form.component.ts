import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
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
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ),
    telephone: new FormControl('', Validators.required),
    experienceSince: new FormControl(''),
    jobTitle: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    profilePic: new FormControl(''),
    linkedin: new FormControl(''),
    github: new FormControl(''),
    country: new FormControl(''),
  });
  @Input() userDetails: any;
  public monthAndYear: Date;
  isChecked=true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit() {}

  updateProfile() {
    const id = this.userDetails._id;
    this.appService.editMember(id, this.userDetails).subscribe((result) => {
      this.router.navigate([`/member/${this.userDetails.memberId}`]);
    });
  }

  changeDate(event: any) {
    this.userDetails.experienceSince = event;
  }

  privacyChange(){
    this.isChecked=!this.isChecked;
    console.log(this.isChecked)
  }

  // onCheckboxChange(e) {
  //   const website: FormArray = this.form.get('website') as FormArray;
  
  //   if (e.target.checked) {
  //     website.push(new FormControl(e.target.value));
  //   } else {
  //      const index = website.controls.findIndex(x => x.value === e.target.value);
  //      website.removeAt(index);
  //   }
  // }
}
