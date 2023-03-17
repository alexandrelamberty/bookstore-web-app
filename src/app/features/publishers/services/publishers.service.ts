import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreatePublisherDTO } from '../dtos/create-publisher.dto';
import { UpdatePublisherDTO } from '../dtos/update-publisher.dto';
import {
  PublisherResponse,
  PublishersResponse,
} from '../models/publisher-responses.model';

@Injectable({
  providedIn: 'root',
})
export class PublishersService {
  private endpoint = 'publishers/';

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<PublishersResponse> {
    return this._httpClient.get<PublishersResponse>(
      environment.apiURL + this.endpoint
    );
  }

  getById(id: number): Observable<PublisherResponse> {
    return this._httpClient.get<PublisherResponse>(
      environment.apiURL + this.endpoint + id
    );
  }

  create(publisher: CreatePublisherDTO): Observable<PublisherResponse> {
    return this._httpClient.post<PublisherResponse>(
      environment.apiURL + this.endpoint,
      publisher
    );
  }

  update(id: number, publisher: UpdatePublisherDTO): Observable<any> {
    return this._httpClient.put(
      environment.apiURL + this.endpoint + id,
      publisher
    );
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(environment.apiURL + this.endpoint + id);
  }
}
