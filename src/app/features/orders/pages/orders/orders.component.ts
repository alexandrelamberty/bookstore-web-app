import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  // Property passed to order-details
  selectedBook: any = '';

  onBookAdded(eventData: { title: string }) {
    console.log(eventData);
  }

  onSelectedItem(eventData: { title: string }) {
    console.log('Event', eventData);
    this.selectedBook = eventData;
  }
}
