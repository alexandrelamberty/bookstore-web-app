import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  // Property passed to order-details
  selectedBook: any = '';

  favBooks = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  onBookAdded(eventData: { title: string }) {
    console.log(eventData);
    this.favBooks = this.favBooks.concat({
      title: eventData.title,
    });
  }

  onSelectedItem(eventData: { title: string }) {
    console.log('Event', eventData);
    // Update the property we want to use in order-details
    // change page and pass id
    this.selectedBook = eventData;
  }
}
