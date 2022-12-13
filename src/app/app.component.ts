import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'members-portal';

  constructor(public dialog: MatDialog){}

  openModal(){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: 'login',
    };
    dialogConfig.minWidth = 500;

    const dialogRef = this.dialog.open(LoginFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
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
