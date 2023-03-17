import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  // Property passed to author-details
  selectedAuthor: any = '';

  constructor(private router: Router) {}

  onSelectedItem(event: { authorId: string }) {
    console.log('Event', event);
    this.router.navigate(['authors', event.authorId]);
  }
}
