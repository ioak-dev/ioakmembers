import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() isHideLogo: boolean=true;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private initializationService: InitializationService,
    private snackBar: MatSnackBar,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.memberId = params['memberId'];
      // console.log(this.memberId);
    });

    this.initializationService.loggedInUser$.subscribe((result) => {
      this.loggedInUser = result;
      // console.log(this.loggedInUser);
    });
  }

  ngOnInit(): void {
    console.log(this.loggedInUser)
    this.name =
      this.loggedInUser?.firstName.charAt(0) +
      this.loggedInUser?.lastName.charAt(0);
  }

  editProfile() {
    this.router.navigate([`/member/${this.loggedInUser?.memberId}/edit`]);
  }

  logout() {
    sessionStorage.clear();
    this.initializationService.loggedInUser$.next(null);
    this.router.navigate(['/member-list'])
    this.showSnackbar()
  }

  showSnackbar() {
    this.snackBar.open("Successfully logged out!", 'Ok', {
        duration: 2000,
        panelClass: 'success',
    });
}
}
