import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre } from '../../models/genre.model';
import { GenresService } from '../../services/genres.service';
import { GenreResponse } from '../../models/genre-responses.model';

@Component({
  selector: 'app-genres-details',
  templateUrl: './genres-details.component.html',
  styleUrls: ['./genres-details.component.css'],
})
export class GenresDetailsComponent {
  genre: Genre | undefined = undefined;

  constructor(
    private router: ActivatedRoute,
    private genresService: GenresService
  ) {}

  ngOnInit() {
    // Retrieve the genreId
    const genreId = this.router.snapshot.paramMap.get('id');

    if (genreId != null)
      this.genresService.getById(genreId).subscribe({
        next: (res: GenreResponse) => {
          this.genre = res.result;
        },
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
}
