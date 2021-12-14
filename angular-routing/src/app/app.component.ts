import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Show spinner');
      }

      if (event instanceof NavigationEnd) {
        console.log('Hide spinner');
      }
    });
  }

  public performSimpleRedirect() {
    this.router.navigateByUrl('/simple');
  }

  public goToUserPage() {
    const obtainedUserId = '456';
    this.router.navigate(['user', obtainedUserId]);
  }
}
