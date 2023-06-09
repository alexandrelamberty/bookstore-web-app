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

  onSelectedItem(event: { bookId: string }) {
    this.router.navigate(['books', event.bookId]);
  }
}
