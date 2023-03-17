import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateGenreDTO } from '../dtos/create-genre.dto';
import { UpdateGenreDTO } from '../dtos/update-genre.dto';
import { GenreResponse, GenresResponse } from '../models/genre-responses.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private endpoint = 'genres/';

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<GenresResponse> {
    return this._httpClient.get<GenresResponse>(
      environment.apiURL + this.endpoint
    );
  }

  getById(id: number): Observable<GenreResponse> {
    return this._httpClient.get<GenreResponse>(
      environment.apiURL + this.endpoint + id
    );
  }

  create(genre: CreateGenreDTO): Observable<GenreResponse> {
    return this._httpClient.post<GenreResponse>(
      environment.apiURL + this.endpoint,
      genre
    );
  }

  update(id: number, genre: UpdateGenreDTO): Observable<any> {
    return this._httpClient.put(environment.apiURL + this.endpoint + id, genre);
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(environment.apiURL + this.endpoint + id);
  }
}
