import { Book } from './book.model';

export interface BooksResponse {
  results: Book[];
  count: number;
  statusCode: number;
}

export interface BookResponse {
  result: Book;
  statusCode: number;
}
