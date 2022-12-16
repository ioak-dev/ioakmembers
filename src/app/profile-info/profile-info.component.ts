import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {
  userId: any;
  membersList: any;
  user: any;
  isShow = false;
  activeToolbar: any = 'images';

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {
    this.appService.members$.subscribe((result) => {
      this.membersList = result;
      // this.getUser();
    });

    // this.route.queryParams.subscribe((params) => {
    //   this.userId = params['_id'];
    //   this.user = params;
    // });

    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getAllMembers();
  }

  navigateToProfile(member: any) {
    this.router.navigate(['/member'], { queryParams: member });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  getUser() {
    // this.user = this.membersList.find(
    //   (data: { _id: any }) => data._id === this.userId
    // );
    this.user = this.membersList.find(
      (data: { memberId: any }) => data.memberId == this.userId
    );
  }

  getAllMembers() {
    this.appService.getAllMember().subscribe(
      (result) => {
        console.log(result);
        this.membersList = result;
        this.appService.members$.next(this.membersList);
        this.getUser();
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
        this.getAllMembers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editPic(file: any) {
    console.log(file);
  }

  changeActiveToolbar(activeTool: any) {
    this.activeToolbar = activeTool;
  }

  isActive(member: any): boolean {
    return member.status === 'Active';
  }
}
