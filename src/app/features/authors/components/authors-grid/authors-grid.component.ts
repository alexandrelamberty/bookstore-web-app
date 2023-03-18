import { Component, EventEmitter, Output } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorsService } from '../../services/authors.service';
import { AuthorsResponse } from '../../models/author-responses.model';

@Component({
  selector: 'app-authors-grid',
  templateUrl: './authors-grid.component.html',
  styleUrls: ['./authors-grid.component.css'],
})
export class AuthorsGridComponent {
  @Output() selectAuthorEvent: EventEmitter<{ authorId: string }>;

  authors: Author[] = [];

  constructor(private service: AuthorsService) {
    this.selectAuthorEvent = new EventEmitter<{ authorId: string }>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (res: AuthorsResponse) => {
        this.authors = res.results;
      },
    });
  }

  selectAuthor(author: Author) {
    // Emit data to the parent
    this.selectAuthorEvent.emit({ authorId: author.id });
  }
}
