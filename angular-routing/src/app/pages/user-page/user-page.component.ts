import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public userId: number;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.data);
  }

  public showInfo() {
    console.log('Log Snapshot:', this.route.snapshot);
  }

}
