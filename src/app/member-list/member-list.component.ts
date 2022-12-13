import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
})
export class InternListComponent implements OnInit{
  foods = [
    { value: 'active-0', viewValue: 'Active' },
    { value: 'Inactive-1', viewValue: 'Inactive' },
    { value: 'online-2', viewValue: 'Online' },
  ];

  searchText: string;
  membersList: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getAllMembers();
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

  applySearch(event: Event) {}
}
