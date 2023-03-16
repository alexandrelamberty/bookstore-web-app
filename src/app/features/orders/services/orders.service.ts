import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  books: Order[] = [];

  addOrder(book: Order) {
    this.books.push(book);
  }

  getOrders(): Order[] {
    return this.books;
  }

  removeOrder(book: Order) {
    //
  }
}
