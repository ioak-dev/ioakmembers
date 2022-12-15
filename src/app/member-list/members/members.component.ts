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
    this.router.navigate(['/profile-info'],{queryParams: member });
  }

  updateMember() {
    const memberObj = {
      firstName: 'Test',
      lastName: 'Test',
      email: 'a@bc.com2',
      telephone: '+9178935793',
      linkedId: 'linkin link',
      githubLink: 'git link',
      jobTitle: 'Developer',
      about: 'Lorem ipsum dolor sit',
      experienceSince: '',
      profilePic: 'pic link',
    };
    this.appService.updateMember(memberObj).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
