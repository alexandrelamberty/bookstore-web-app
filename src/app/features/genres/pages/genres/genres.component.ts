import { Component } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent {
  // Property passed to genre-details
  selectedGenre: any = '';

  favGenres = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  onGenreAdded(eventData: { title: string }) {
    console.log(eventData);
    this.favGenres = this.favGenres.concat({
      title: eventData.title,
    });
  }

  onSelectedItem(eventData: { title: string }) {
    console.log('Event', eventData);
    // Update the property we want to use in genre-details
    // change page and pass id
    this.selectedGenre = eventData;
  }
}
