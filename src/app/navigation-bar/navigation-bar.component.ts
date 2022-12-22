import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { InitializationService } from '../initialization.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  memberId: any;
  user: any;
  name: string;
  loggedInUser: any;
  @Input() isHideLogo: boolean = true;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private initializationService: InitializationService,
    private appService: AppService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.memberId = params['memberId'];
      // console.log(this.memberId);
    });

    this.initializationService.loggedInUser$.subscribe((result) => {
      this.loggedInUser = result;
    });
  }

  ngOnInit(): void {
    if (this.loggedInUser?.memberId) {
      this.appService
        .getMemberByIdForEdit(this.loggedInUser?.memberId)
        .subscribe((data) => {
          this.loggedInUser = data;
        });
    }
    this.name =
      this.loggedInUser?.firstName.charAt(0) +
      this.loggedInUser?.lastName.charAt(0);
  }

  editProfile() {
    this.router.navigate([`/member/${this.loggedInUser?.memberId}/edit`]);
  }

  changePassword(){
    this.router.navigate(['/change-password']);
  }

  logout() {
    sessionStorage.clear();
    this.initializationService.loggedInUser$.next(null);
    this.router.navigate(['/member-list']);
  }
}
