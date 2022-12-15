import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  memberId: any;
  user:any;
  name: string;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.memberId = params['memberId'];
      console.log(this.memberId);
    });
  }

  ngOnInit(): void {
    const firstName=sessionStorage.getItem('firstName');
    const lastName=sessionStorage.getItem('lastName');
    this.name=firstName.charAt(0) + lastName.charAt(0);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'login',
    };
    dialogConfig.minWidth = 500;

    const dialogRef = this.dialog.open(LoginFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      // if(result){
      //   if(yes){
      //     yes();
      //   }
      // }else{
      //   if(no){
      //     no();
      //   }
      // }
    });
  }
  // }

  editProfile() {
    this.router.navigate([`/member/${this.memberId}/edit`]);
  }

  logout(){
    sessionStorage.clear();
  }
}
