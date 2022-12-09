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

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) {
    this.appService.members$.subscribe((result) => {
      this.membersList = result;
    });

    this.route.queryParams.subscribe((params) => {
      this.userId = params['_id'];
      this.user = params;
    });
  }

  ngOnInit(): void {
    this.getAllMembers();
  }

  navigateToProfile(member: any) {
    this.router.navigate(['/profile-info'], { queryParams: member });
  }

  getAllMembers() {
    this.appService.getAllMember().subscribe(
      (result) => {
        console.log(result);
        this.membersList = result;
        this.appService.members$.next(this.membersList);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
