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
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getMemberById();
  }

  navigateToProfile(member: any) {
    this.router.navigate(['/member'], { queryParams: member });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  changeActiveToolbar(activeTool: any) {
    this.activeToolbar = activeTool;
  }

  isActive(member: any): boolean {
    return member.status === 'Active';
  }

  getMemberById(){
    this.appService.getMemberById(this.userId).subscribe(
      (result) => {
        this.user=result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
