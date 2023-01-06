import { Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  displayedColumns: string[] = [
    'profilePic',
    'firstName',
    'lastName',
    'email',
    'telephone',
    'spotlight',
    'verified',
    'view',
  ];
  dataSource = new MatTableDataSource();
  membersList: any;
  isChecked = true;

  constructor(private appService: AppService, private router: Router) {}
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getAllMembers();
  }

  getAllMembers() {
    this.appService.getAllMember().subscribe(
      (result) => {
        this.membersList = result;
        this.dataSource = this.membersList;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToProfile(member: any) {
    // this.router.navigate(['/member'],{queryParams: member });
    this.router.navigate([`/member/${member.memberId}`]);
  }

  privacyChange() {}
}
