import { Component, EventEmitter, Output } from '@angular/core';
import { Author } from '../../model/author.model';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-authors-view',
  templateUrl: './authors-view.component.html',
  styleUrls: ['./authors-view.component.css'],
})
export class AuthorsViewComponent {
  @Output() selectAuthorEvent: EventEmitter<{ title: string }>;

  authors: Author[] = [];

  constructor(private service: AuthorsService) {
    console.log('AuthorListComponent');
    this.selectAuthorEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    console.log(AuthorsViewComponent.name);
    this.authors = this.service.getAuthors();
  }

  selectAuthor(author: Author) {
    console.log('AuthorsViewComponent::selectAuthor', author);
    // Emit data to the parent
    this.selectAuthorEvent.emit({ title: author.firstName });
  }
}
