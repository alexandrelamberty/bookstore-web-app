import { Book } from '../../books/model/book.model';

export interface Publisher {
  name: string;
  books?: Book[];
}
