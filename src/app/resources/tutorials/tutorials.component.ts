import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent {
  tutorials = [
    {
      "title": "Java",
      "tutorials": {
        "icon": "../../assets/icons/java.png",
        "description": "Java fundamentals",
        "link": "https://www.amazon.in/Certified-Professional-Programmer-Fundamentals-1Z0-815/dp/1649513895/ref=sr_1_1_sspa?keywords=ocp+java+11&qid=1663138651&sprefix=ocp+11%2Caps%2C266&sr=8-1-spons&psc=1&smid=A15DBATYR506U3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyT0ZLOFpEWlI2MVBSJmVuY3J5cHRlZElkPUEwNzI5MzU3MlA4RDNaRzZZM1VIOCZlbmNyeXB0ZWRBZElkPUEwNzA5NTQ3MVlPNkhSUFU3RUZUNSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
      }
    },
    {
      "title": "HTML",
      "tutorials": {
        "icon": "../../assets/icons/html.png",
        "description": "HTML Introduction",
        "link": "https://www.w3schools.com/html/html_intro.asp"
      }
    },
    {
      "title": "Javascript",
      "tutorials": {
        "icon": "../../assets/icons/javascript.png",
        "description": "JavaScript Introduction",
        "link": "https://www.w3schools.com/js/js_intro.asp"
      }
    },
    {
      "title": "Angular",
      "tutorials": {
        "icon": "../../assets/icons/angularjs.png",
        "description": "Angular Introduction",
        "link": "https://www.w3schools.com/angular/angular_intro.asp"
      }
    },
    {
      "title": "Css",
      "tutorials": {
        "icon": "../../assets/icons/css3.png",
        "description": "CSS Introduction",
        "link": "https://www.w3schools.com/css/css_intro.asp"
      }
    },
    {
      "title": "Bootstrap",
      "tutorials": {
        "icon": "../../assets/icons/bootstrap.png",
        "description": "Bootstrap 5 Get Started",
        "link": "https://www.w3schools.com/bootstrap5/bootstrap_get_started.php"
      }
    },
    {
      "title": "Git",
      "tutorials": {
        "icon": "../../assets/icons/git.png",
        "description": "Git Introduction",
        "link": "https://www.w3schools.com/git/git_intro.asp"
      }
    },
    {
      "title": "Github",
      "tutorials": {
        "icon": "../../assets/icons/github.png",
        "description": "GitHub Introduction",
        "link": "https://www.w3schools.com/git/git_remote_getstarted.asp?remote=github"
      }
    },
    {
      "title": "Opensource",
      "tutorials": {
        "icon": "../../assets/icons/opensource.png",
        "description": "Building Welcoming Communities",
        "link": "https://opensource.guide/building-community"
      }
    }
  ];

}
