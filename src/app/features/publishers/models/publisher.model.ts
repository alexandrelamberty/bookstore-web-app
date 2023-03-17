import { Book } from '../../books/models/book.model';

export interface Publisher {
  name: string;
  books?: Book[];
}
