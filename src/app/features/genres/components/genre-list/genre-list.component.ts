import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import { Genre } from '../../model/genre.model';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css'],
  providers: [GenresService],
})
export class GenreListComponent implements OnInit {
  // Event to be emited to the parent
  @Output() selectGenreEvent: EventEmitter<{ title: string }>;

  // Genres to show in the list
  genres: Genre[] = [];

  constructor(private genresService: GenresService) {
    console.log('GenreListComponent');
    this.selectGenreEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    console.log(GenreListComponent.name);
    this.genres = this.genresService.getGenres();
  }

  deleteGenre(genre: Genre) {
    console.log('GenreListComponent::deleteGenre', genre);
  }

  selectGenre(genre: Genre) {
    console.log('GenreListComponent::selectGenre', genre);
    // Emit data to the parent
    this.selectGenreEvent.emit({ title: genre.name });
  }
}
