import { Order } from './order.model';

export interface OrdersResponse {
  results: Order[];
  count: number;
  statusCode: number;
}

export interface OrderResponse {
  result: Order;
  statusCode: number;
}
