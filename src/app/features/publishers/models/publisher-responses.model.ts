import { Publisher } from './publisher.model';

export interface PublishersResponse {
  results: Publisher[];
  count: number;
  statusCode: number;
}

export interface PublisherResponse {
  result: Publisher;
  statusCode: number;
}
