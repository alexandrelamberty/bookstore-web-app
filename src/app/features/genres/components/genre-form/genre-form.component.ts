import { Component, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Genre } from '../../models/genre.model';
import { CreateGenreDTO } from '../../dtos/create-genre.dto';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  providers: [GenresService, FormBuilder],
})
export class GenreFormComponent implements OnInit {
  genreForm: FormGroup;
  submitted = false;

  constructor(
    private service: GenresService,
    private formBuilder: FormBuilder
  ) {
    console.log('GenreFormComponent::constructor');
    this.genreForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
    });
  }

  ngOnInit(): void {
    console.log('GenreFormComponent::OnInit');
  }

  onSubmit() {
    console.log('GenreFormComponent::onSubmit');
    this.submitted = true;
    if (this.genreForm.invalid) return;

    const genre: CreateGenreDTO = {
      name: this.genreForm.value.name,
    };

    this.service.create(genre);
    this.genreForm.reset();
  }

  onReset() {
    console.log('GenreFormComponent::onSubmit');
    this.submitted = false;
    this.genreForm.reset();
  }
}
