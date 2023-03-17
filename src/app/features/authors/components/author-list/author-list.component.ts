import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
  providers: [AuthorsService],
})
export class AuthorListComponent implements OnInit {
  // Event to be emited to the parent
  @Output() selectAuthorEvent: EventEmitter<{ title: string }>;

  // Authors to show in the list
  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) {
    console.log('AuthorListComponent');
    this.selectAuthorEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    console.log(AuthorListComponent.name);
    this.authorsService.getAll().subscribe({
      next: () => {},
    });
  }

  deleteAuthor(author: Author) {
    console.log('AuthorListComponent::deleteAuthor', author);
    this.authors.forEach((el, index, object) => {
      if (el.firstName === author.firstName) {
        object.splice(index, 1);
      }
    });
  }

  selectAuthor(author: Author) {
    console.log('AuthorListComponent::selectAuthor', author);
    // Emit data to the parent
    this.selectAuthorEvent.emit({ title: author.firstName });
  }
}
