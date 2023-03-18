import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CreateAuthorDTO } from '../../dtos/create-author.dto';
import { AuthorsService } from '../../services/authors.service';

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

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.authorForm.invalid) return;

    const author: CreateAuthorDTO = {
      firstName: this.authorForm.value.firsName,
      lastName: this.authorForm.value.lastName,
    };

    this.service.create(author).subscribe({
      next: () => {
        //
      },
    });
    this.authorForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.authorForm.reset();
  }
}
