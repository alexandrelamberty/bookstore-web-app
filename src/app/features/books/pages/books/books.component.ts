import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  // Property passed to book-details
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
    // Update the property we want to use in book-details
    // change page and pass id
    this.selectedBook = eventData;
  }
}
