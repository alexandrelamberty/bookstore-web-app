import { Component } from '@angular/core';
import { GenresResponse } from '../../../genres/models/genre-responses.model';
import { Genre } from '../../../genres/models/genre.model';
import { GenresService } from '../../../genres/services/genres.service';

@Component({
  selector: 'app-genres-view',
  templateUrl: './genres-view.component.html',
  styleUrls: ['./genres-view.component.css'],
})
export class GenresViewComponent {
  genres: Genre[] | undefined = undefined;
  constructor(private genresService: GenresService) {}
  ngOnInit(): void {
    this.genresService.getAll().subscribe({
      next: (res: GenresResponse) => {
        this.genres = res.results;
      },
    });
  }
}
