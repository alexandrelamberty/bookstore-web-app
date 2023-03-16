import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  // Property passed to author-details
  selectedAuthor: any = '';

  favAuthors = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  onAuthorAdded(eventData: { title: string }) {
    console.log(eventData);
    this.favAuthors = this.favAuthors.concat({
      title: eventData.title,
    });
  }

  onSelectedItem(eventData: { title: string }) {
    console.log('Event', eventData);
    // Update the property we want to use in author-details
    // change page and pass id
    this.selectedAuthor = eventData;
  }
}
