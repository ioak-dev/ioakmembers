import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  user:any={
    firstName:'',
    lastName:'',
    memberId:'',
    profilePic:'',
    status:'Active'
  };
  isShow = false;
  constructor(private appService: AppService,) { }

  ngOnInit(): void {
    this.user.firstName=sessionStorage.getItem('firstName')
    this.user.lastName=sessionStorage.getItem('lastName')
    this.user.memberId=sessionStorage.getItem('memberId')
    this.user.profilePic=sessionStorage.getItem('profilePic')
  }


  deletePic() {
    console.log(this.user);
    const memberObj = { ...this.user, profilePic: null };
    this.appService.editMember(this.user._id, memberObj).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editPic(file: any) {
    console.log(file);
  }

}
