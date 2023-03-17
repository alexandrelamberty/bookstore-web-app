import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateOrderDTO } from '../dtos/create-order.dto';
import { UpdateOrderDTO } from '../dtos/update-order.dto';
import { OrderResponse, OrdersResponse } from '../models/order-responses.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private endpoint = 'orders/';

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<OrdersResponse> {
    return this._httpClient.get<OrdersResponse>(
      environment.apiURL + this.endpoint
    );
  }

  getById(id: number): Observable<OrderResponse> {
    return this._httpClient.get<OrderResponse>(
      environment.apiURL + this.endpoint + id
    );
  }

  create(order: CreateOrderDTO): Observable<OrderResponse> {
    return this._httpClient.post<OrderResponse>(
      environment.apiURL + this.endpoint,
      order
    );
  }

  update(id: number, order: UpdateOrderDTO): Observable<any> {
    return this._httpClient.put(environment.apiURL + this.endpoint + id, order);
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete(environment.apiURL + this.endpoint + id);
  }
}
