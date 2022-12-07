import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.scss']
})
export class InternListComponent implements OnInit,AfterViewInit {
  data = [
    {position: 1, firstname: 'Mohu', lastname: "Mohan", email: 'mk@gmail.com',college:'SRM'},
    {position: 2, firstname: 'krish', lastname: "Test", email: 'test@gmail.com',college:'TRP'},
    {position: 3, firstname: 'Test1', lastname: "Test2", email: 'test234@gmail.com',college:'RVS'},
    
  ];
  displayedColumns = ['position', 'firstname', 'lastname', 'email','college'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort;
  searchText: string;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data=this.data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applySearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchText = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.searchText;
}

}
