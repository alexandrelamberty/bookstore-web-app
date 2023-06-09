import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import { Genre } from '../../models/genre.model';
import { GenresResponse } from '../../models/genre-responses.model';

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
    this.selectGenreEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    this.genresService.getAll().subscribe({
      next: (res: GenresResponse) => {
        this.genres = res.results;
      },
    });
  }

  deleteGenre(genre: Genre) {}

  selectGenre(genre: Genre) {
    // Emit data to the parent
    this.selectGenreEvent.emit({ title: genre.name });
  }
}
