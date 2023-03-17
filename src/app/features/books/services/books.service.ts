import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateBookDTO } from '../dtos/create-book.dto';
import { UpdateBookDTO } from '../dtos/update-book.dto';
import { BookResponse, BooksResponse } from '../models/book-responses.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private endpoint = 'books/';

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<BooksResponse> {
    return this._httpClient.get<BooksResponse>(
      environment.apiURL + this.endpoint
    );
  }

  getById(id: string): Observable<BookResponse> {
    return this._httpClient.get<BookResponse>(
      environment.apiURL + this.endpoint + id
    );
  }

  create(book: CreateBookDTO): Observable<BookResponse> {
    return this._httpClient.post<BookResponse>(
      environment.apiURL + this.endpoint,
      book
    );
  }

  update(id: number, book: UpdateBookDTO): Observable<any> {
    return this._httpClient.put(environment.apiURL + this.endpoint + id, book);
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(environment.apiURL + this.endpoint + id);
  }
}
