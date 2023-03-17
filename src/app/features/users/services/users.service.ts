import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { UserResponse, UsersResponse } from '../model/user-responses.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private endpoint = 'users/';

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<UsersResponse> {
    return this._httpClient.get<UsersResponse>(
      environment.apiURL + this.endpoint
    );
  }

  getById(id: number): Observable<UserResponse> {
    return this._httpClient.get<UserResponse>(
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
