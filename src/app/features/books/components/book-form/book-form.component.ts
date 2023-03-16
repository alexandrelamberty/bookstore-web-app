import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  providers: [BooksService, FormBuilder],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  submitted = false;

  constructor(private service: BooksService, private formBuilder: FormBuilder) {
    console.log('BookFormComponent::constructor');
    this.bookForm = this.formBuilder.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
      author: new FormControl('', [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]),
      amazon: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      tags: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
    console.log('BookFormComponent::OnInit');
  }

  onSubmit() {
    console.log('BookFormComponent::onSubmit');
    this.submitted = true;
    if (this.bookForm.invalid) return;
    const book: Book = {
      title: this.bookForm.value.title,
      author: this.bookForm.value.title,
      amazonUrl: this.bookForm.value.title,
    };
    this.service.addBook(book);
    this.bookForm.reset();
  }

  onReset() {
    console.log('BookFormComponent::onSubmit');
    this.submitted = false;
    this.bookForm.reset();
  }
}
