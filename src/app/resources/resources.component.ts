import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  activePage: 'tutorials' | 'bookmarks';

  constructor() {
    this.activePage = 'tutorials';
  }

  changeActivePage(page: any) {
    this.activePage = page;
  }
}
