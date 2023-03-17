import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { BOOKS } from './users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private endpoint = 'users/';

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<GenreResultArray> {
    return this._httpClient.get<GenreResultArray>(
      environment.apiURL + this.endpoint
    );
  }

  getById(id: number): Observable<GenreResult> {
    return this._httpClient.get<GenreResult>(
      environment.apiURL + this.endpoint + id
    );
  }

  update(id: number, user: UpdateUserDTO): Observable<any> {
    return this._httpClient.put(environment.apiURL + this.endpoint + id, user);
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(environment.apiURL + this.endpoint + id);
  }
}
