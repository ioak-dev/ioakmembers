import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  @Input() membersList: any;
  
  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {}

  navigateToProfile(member:any) {
    // this.router.navigate(['/member'],{queryParams: member });
    this.router.navigate([`/member/${member.memberId}`])
  }

}
