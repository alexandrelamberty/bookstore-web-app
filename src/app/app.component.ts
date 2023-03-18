import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router // private swUpdate: SwUpdate
  ) {}

  ngOnInit() {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.available.subscribe(() => {
    //     if (
    //       confirm(
    //         "You're using an old version of the control panel. Want to update?"
    //       )
    //     ) {
    //       window.location.reload();
    //     }
    //   });
    // }
  }
}
