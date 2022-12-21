import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { InitializationService } from '../initialization.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss'],
})
export class MemberEditComponent implements OnInit {
  user: any;
  isShow = true;
  membersList: any;
  memberId: string;
  fileData: File;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private initializationService: InitializationService
  ) {
    // this.route.queryParams.subscribe((params) => {
    //   this.memberId = params['id'];
    // });
    this.initializationService.loggedInUser$.subscribe((response) => {
      this.user = response;
      this.memberId = this.user.memberId;
    });
    this.appService.members$.subscribe((result) => {
      this.membersList = result;
    });
  }

  ngOnInit() {
    this.getMemberById();
  }

  getMemberById() {
    this.appService.getMemberById(this.memberId).subscribe(
      (result) => {
        this.user = result;
      },
      (error) => {
        console.log(error);
      }
    );
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
    this.fileData = file.target.files[0] as File;
    this.appService.updatePicture(this.user._id, this.fileData).subscribe(
      (result) => {
        this.user = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
