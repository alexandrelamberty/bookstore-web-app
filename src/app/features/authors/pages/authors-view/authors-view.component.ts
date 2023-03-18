import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-authors-view',
  templateUrl: './authors-view.component.html',
  styleUrls: ['./authors-view.component.css'],
})
export class AuthorsViewComponent {
  constructor(private router: Router) {}

  // Event from the author-view component
  onSelectedItem(event: { authorId: string }) {
    console.log('onSelectedItem', event);
    this.router.navigate(['authors', event.authorId]);
  }
}
