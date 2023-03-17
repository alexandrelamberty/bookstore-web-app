import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateAuthorDTO } from '../dtos/create-author.dto';
import { UpdateAuthorDTO } from '../dtos/update-author.dto';
import {
  AuthorResponse,
  AuthorsResponse,
} from '../models/author-responses.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private endpoint = 'authors/';

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<AuthorsResponse> {
    return this._httpClient.get<AuthorsResponse>(
      environment.apiURL + this.endpoint
    );
  }

  getById(id: string): Observable<AuthorResponse> {
    return this._httpClient.get<AuthorResponse>(
      environment.apiURL + this.endpoint + id
    );
  }

  create(author: CreateAuthorDTO): Observable<AuthorResponse> {
    return this._httpClient.post<AuthorResponse>(
      environment.apiURL + this.endpoint,
      author
    );
  }

  update(id: number, author: UpdateAuthorDTO): Observable<any> {
    return this._httpClient.put(
      environment.apiURL + this.endpoint + id,
      author
    );
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(environment.apiURL + this.endpoint + id);
  }
}
