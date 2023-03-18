import { Component, EventEmitter, Output } from '@angular/core';
import { Genre } from '../../models/genre.model';
import { GenresService } from '../../services/genres.service';
import { GenresResponse } from '../../models/genre-responses.model';

@Component({
  selector: 'app-genres-view',
  templateUrl: './genres-view.component.html',
  styleUrls: ['./genres-view.component.css'],
})
export class GenresViewComponent {
  @Output() selectGenreEvent: EventEmitter<{ genreId: string }>;

  genres: Genre[] = [];

  constructor(private service: GenresService) {
    this.selectGenreEvent = new EventEmitter<{ genreId: string }>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (res: GenresResponse) => {
        this.genres = res.results;
      },
    });
  }

  selectGenre(genre: Genre) {
    // Emit data to the parent
    this.selectGenreEvent.emit({ genreId: genre.id });
  }
}
