import { Injectable } from '@angular/core';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  genres: Genre[] = [];

  addGenre(genre: Genre) {
    this.genres.push(genre);
  }

  getGenres(): Genre[] {
    return this.genres;
  }

  removeGenre(genre: Genre) {
    //
  }
}
