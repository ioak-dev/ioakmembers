import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.scss'],
})
export class InternListComponent implements OnInit {
  statusArray = [
    { value: null, viewValue: 'All' },
    { value: 'Active', viewValue: 'Active' },
    { value: 'Inactive', viewValue: 'Inactive' },
    { value: 'Registered', viewValue: 'Registered' },
  ];

  searchText: string;
  membersList: any;
  filteredMembersList: any;
  selectedStatus: any = null;
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
        this.onStatusSelection();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onStatusSelection() {
    if (this.selectedStatus !== null) {
      this.filteredMembersList = this.membersList?.filter(
        (item: any) => item.status === this.selectedStatus
      );
    } else {
      this.filteredMembersList = this.membersList;
    }
  }

  applySearch(value: Event): void {
    this.filteredMembersList = this.membersList.filter((val: any) =>
      val.firstName.toLowerCase().includes(this.searchText)
    );
  }
}
