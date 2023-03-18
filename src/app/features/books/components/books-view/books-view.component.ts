import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { BooksResponse } from '../../models/book-responses.model';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css'],
})
export class BooksViewComponent {
  @Output() selectBookEvent: EventEmitter<{ bookId: string }>;

  books: Book[] = [];

  constructor(private booksService: BooksService) {
    this.selectBookEvent = new EventEmitter<{ bookId: string }>();
  }

  ngOnInit(): void {
    this.booksService.getAll().subscribe({
      next: (response: BooksResponse) => {
        this.books = response.results;
      },
    });
  }

  selectBook(book: Book) {
    // Emit data to the parent
    this.selectBookEvent.emit({ bookId: book.id });
  }
}
