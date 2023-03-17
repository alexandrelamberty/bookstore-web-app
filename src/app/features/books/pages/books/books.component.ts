import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private router: Router) {
    //
  }

  onBookAdded(event: { title: string }) {
    console.log(event);
  }

  onSelectedItem(event: { bookId: string }) {
    console.log('Event', event);
    this.router.navigate(['books', event.bookId]);
  }
}
