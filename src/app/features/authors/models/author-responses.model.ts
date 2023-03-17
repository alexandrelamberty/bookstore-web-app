import { Author } from './author.model';

export interface AuthorsResponse {
  results: Author[];
  count: number;
  statusCode: number;
}

export interface AuthorResponse {
  result: Author;
  statusCode: number;
}
