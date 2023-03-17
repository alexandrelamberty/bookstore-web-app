import { Genre } from './genre.model';

export interface GenresResponse {
  results: Genre[];
  count: number;
  statusCode: number;
}

export interface GenreResponse {
  result: Genre;
  statusCode: number;
}
