import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../models/author.model';
import { AuthorsService } from '../../services/authors.service';
import { AuthorResponse } from '../../models/author-responses.model';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css'],
})
export class AuthorsDetailsComponent {
  author: Author | undefined = undefined;

  constructor(
    private router: ActivatedRoute,
    private authorsService: AuthorsService
  ) {
    console.log(AuthorsDetailsComponent.name);
  }

  ngOnInit() {
    console.log('OnInit');
    // Retrieve the authorId
    const authorId = this.router.snapshot.paramMap.get('id');
    console.log(authorId);
    if (authorId != null)
      this.authorsService.getById(authorId).subscribe({
        next: (res: AuthorResponse) => {
          this.author = res.result;
        },
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('AuthorDetailsComponent::OnChange', changes);
    // changes.prop contains the old and the new value...
  }
}
