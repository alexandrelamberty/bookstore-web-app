import { Book } from '../../books/model/book.model';

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  books?: Book[];
}
