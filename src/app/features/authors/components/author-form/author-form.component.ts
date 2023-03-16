import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Author } from '../../model/author.model';
import { AuthorDTO } from '../../dto/author.dto';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  providers: [AuthorsService, FormBuilder],
})
export class AuthorFormComponent implements OnInit {
  authorForm: FormGroup;
  submitted = false;

  constructor(
    private service: AuthorsService,
    private formBuilder: FormBuilder
  ) {
    console.log('AuthorFormComponent::constructor');
    this.authorForm = this.formBuilder.group({
      firsName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]),
    });
  }

  ngOnInit(): void {
    console.log('AuthorFormComponent::OnInit');
  }

  onSubmit() {
    console.log('AuthorFormComponent::onSubmit');

    this.submitted = true;
    if (this.authorForm.invalid) return;

    const author: AuthorDTO = {
      firstName: this.authorForm.value.firsName,
      lastName: this.authorForm.value.lastName,
    };

    this.service.addAuthor(author);
    this.authorForm.reset();
  }

  onReset() {
    console.log('AuthorFormComponent::onSubmit');
    this.submitted = false;
    this.authorForm.reset();
  }
}
