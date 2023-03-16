import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BooksService],
})
export class BookListComponent implements OnInit {
  // Event to be emited to the parent
  @Output() selectBookEvent: EventEmitter<{title:string}>;

  // Books to show in the list
  books: Book[] = [];

  constructor(private booksService: BooksService) {
    console.log('BookListComponent');
    this.selectBookEvent = new EventEmitter<{title:string}>();
  }

  ngOnInit(): void {
    console.log(BookListComponent.name);
    this.books = this.booksService.getBooks();
  }

  deleteBook(book: Book) {
    console.log('BookListComponent::deleteBook', book);
    this.books.forEach((el, index, object) => {
      if (el.title === book.title) {
        object.splice(index, 1);
      }
    });
  }

  selectBook(book: Book) {
    console.log('BookListComponent::selectBook', book);
    // Emit data to the parent
    this.selectBookEvent.emit({title: book.title});
  }
}
