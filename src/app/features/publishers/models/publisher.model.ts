import { Book } from '../../books/models/book.model';

export interface Publisher {
  id: string;
  name: string;
  books?: Book[];
}
