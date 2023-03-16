import { Component } from '@angular/core';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css'],
})
export class PublishersComponent {
  // Property passed to publisher-details
  selectedPublisher: any = '';

  favPublishers = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  onPublisherAdded(eventData: { title: string }) {
    console.log(eventData);
    this.favPublishers = this.favPublishers.concat({
      title: eventData.title,
    });
  }

  onSelectedItem(eventData: { title: string }) {
    console.log('Event', eventData);
    // Update the property we want to use in publisher-details
    // change page and pass id
    this.selectedPublisher = eventData;
  }
}
