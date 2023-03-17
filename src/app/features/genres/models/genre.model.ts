import { Book } from '../../books/models/book.model';

export interface Genre {
  id: string;
  name: string;
  books?: Book[];
}
