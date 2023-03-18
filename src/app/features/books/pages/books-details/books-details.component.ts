import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { BookResponse } from '../../models/book-responses.model';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css'],
})
export class BooksDetailsComponent {
  book: Book | undefined = undefined;

  constructor(
    private router: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    const bookId = this.router.snapshot.paramMap.get('id');

    if (bookId != null)
      this.booksService.getById(bookId).subscribe({
        next: (res: BookResponse) => {
          this.book = res.result;
        },
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
}
