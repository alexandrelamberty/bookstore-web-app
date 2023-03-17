import { Book } from '../../books/models/book.model';

export interface OrderBook {
  book: Book;
  quantity: number;
}
