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
  @Output() selectGenreEvent: EventEmitter<{ title: string }>;

  genres: Genre[] = [];

  constructor(private service: GenresService) {
    console.log('GenreListComponent');
    this.selectGenreEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    console.log(GenresViewComponent.name);
    this.service.getAll().subscribe({
      next: (res: GenresResponse) => {
        this.genres = res.results;
      },
    });
  }

  selectGenre(genre: Genre) {
    console.log('GenresViewComponent::selectGenre', genre);
    // Emit data to the parent
    this.selectGenreEvent.emit({ title: genre.name });
  }
}
