import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../authors/services/authors.service';
import { AuthorsResponse } from '../../../authors/models/author-responses.model';
import { Author } from '../../../authors/models/author.model';

@Component({
  selector: 'app-authors-view',
  templateUrl: './authors-view.component.html',
  styleUrls: ['./authors-view.component.css'],
})
export class AuthorsViewComponent implements OnInit {
  authors: Author[] | undefined = undefined;
  constructor(private authorsService: AuthorsService) {}
  ngOnInit(): void {
    this.authorsService.getAll().subscribe({
      next: (res: AuthorsResponse) => {
        this.authors = res.results;
      },
    });
  }
}
