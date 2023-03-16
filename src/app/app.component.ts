import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tftic-angular';

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('AppComponent::Constructor', router);
  }

  goTo() {
    console.log('goto');
    // ["/books", {id:bookId}]
    this.router.navigate(['/books']);
  }
}
