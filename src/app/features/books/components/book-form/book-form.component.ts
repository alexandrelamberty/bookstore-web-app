import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book } from '../../models/book.model';
import { CreateBookDTO } from '../../dtos/create-book.dto';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  providers: [BooksService, FormBuilder],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  submitted = false;

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder
  ) {
    this.bookForm = this.formBuilder.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(255),
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(500),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.invalid) return;
    const book: CreateBookDTO = {
      title: this.bookForm.value.title,
      description: this.bookForm.value.description,
    };
    this.booksService.create(book);
    this.bookForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.bookForm.reset();
  }
}
