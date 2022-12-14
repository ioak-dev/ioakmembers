import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit():void{}

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
}
