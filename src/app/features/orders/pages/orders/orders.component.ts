import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  // Property passed to order-details
  selectedBook: any = '';

  onBookAdded(eventData: { title: string }) {}

  onSelectedItem(eventData: { title: string }) {
    this.selectedBook = eventData;
  }
}
