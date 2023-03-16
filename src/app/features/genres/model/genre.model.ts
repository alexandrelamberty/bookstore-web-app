import { Book } from '../../books/model/book.model';

export interface Genre {
  name: string;
  books?: Book[];
}
