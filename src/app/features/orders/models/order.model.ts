import { OrderBook } from './order-book.model';

export interface Order {
  id: string;
  user: string;
  books: OrderBook[];
  // subtotal: string;
  // creationData
  // validated
}
