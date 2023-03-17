import { Component, EventEmitter, Output } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorsService } from '../../services/authors.service';
import { AuthorsResponse } from '../../models/author-responses.model';

@Component({
  selector: 'app-authors-view',
  templateUrl: './authors-view.component.html',
  styleUrls: ['./authors-view.component.css'],
})
export class AuthorsViewComponent {
  @Output() selectAuthorEvent: EventEmitter<{ authorId: string }>;

  authors: Author[] = [];

  constructor(private service: AuthorsService) {
    console.log('AuthorListComponent');
    this.selectAuthorEvent = new EventEmitter<{ authorId: string }>();
  }

  ngOnInit(): void {
    console.log(AuthorsViewComponent.name);
    this.service.getAll().subscribe({
      next: (res: AuthorsResponse) => {
        this.authors = res.results;
      },
    });
  }

  selectAuthor(author: Author) {
    console.log('AuthorsViewComponent::selectAuthor', author);
    // Emit data to the parent
    this.selectAuthorEvent.emit({ authorId: author.id });
  }
}
