import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../model/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css'],
})
export class BooksViewComponent {
  @Output() selectBookEvent: EventEmitter<{ title: string }>;

  books: Book[] = [];

  constructor(private service: BooksService) {
    console.log('BookListComponent');
    this.selectBookEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    console.log(BooksViewComponent.name);
    this.books = this.service.getBooks();
  }

  selectBook(book: Book) {
    console.log('BooksViewComponent::selectBook', book);
    // Emit data to the parent
    this.selectBookEvent.emit({ title: book.title });
  }
}
