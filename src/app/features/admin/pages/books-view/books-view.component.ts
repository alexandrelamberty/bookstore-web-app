import { Component } from '@angular/core';
import { BooksResponse } from '../../../books/models/book-responses.model';
import { Book } from '../../../books/models/book.model';
import { BooksService } from '../../../books/services/books.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css'],
})
export class BooksViewComponent {
  books: Book[] | undefined = undefined;
  constructor(private booksService: BooksService) {}
  ngOnInit(): void {
    this.booksService.getAll().subscribe({
      next: (res: BooksResponse) => {
        this.books = res.results;
      },
    });
  }
}
