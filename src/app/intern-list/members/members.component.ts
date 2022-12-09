import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: 'Name', subtitle: 'Subtitle', content: 'Content here', url: 'https://youzify.cera-theme.com/wp-content/plugins/youzify/includes/public/assets/images/geopattern.png'},
    {title: 'Name', subtitle: 'Subtitle', content: 'Content here', url: 'https://youzify.cera-theme.com/wp-content/plugins/youzify/includes/public/assets/images/geopattern.png'},
    {title: 'Name', subtitle: 'Subtitle', content: 'Content here', url: 'https://youzify.cera-theme.com/wp-content/plugins/youzify/includes/public/assets/images/geopattern.png'},
    {title: 'Name', subtitle: 'Subtitle', content: 'Content here', url: 'https://youzify.cera-theme.com/wp-content/plugins/youzify/includes/public/assets/images/geopattern.png'},
    {title: 'Name', subtitle: 'Subtitle', content: 'Content here', url: 'https://youzify.cera-theme.com/wp-content/plugins/youzify/includes/public/assets/images/geopattern.png'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
