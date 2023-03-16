import { Injectable } from '@angular/core';
import { AuthorDTO } from '../dto/author.dto';
import { Author } from '../model/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  getAuthors(): Author[] {
    //
    return [];
  }

  addAuthor(author: AuthorDTO) {
    //
  }
  removeAuthor(author: Author) {
    //
  }
}
