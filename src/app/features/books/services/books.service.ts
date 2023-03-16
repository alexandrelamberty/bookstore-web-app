import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { BOOKS } from './books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Book[] = BOOKS;

  addBook(book: Book) {
    this.books.push(book);
  }

  getBooks(): Book[] {
    return this.books;
  }

  removeBook(book: Book) {
    this.books.forEach((b: Book, index, object) => {
      if (b.title == book.title) object.splice(index, 1);
    });
  }
}
