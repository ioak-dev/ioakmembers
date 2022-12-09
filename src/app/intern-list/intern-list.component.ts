import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.scss'],
})
export class InternListComponent implements OnInit{
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
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
