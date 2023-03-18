import { Component, OnInit } from '@angular/core';
import { PublishersService } from '../../services/publishers.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Publisher } from '../../models/publisher.model';
import { CreatePublisherDTO } from '../../dtos/create-publisher.dto';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  providers: [PublishersService, FormBuilder],
})
export class PublisherFormComponent implements OnInit {
  publisherForm: FormGroup;
  submitted = false;

  constructor(
    private service: PublishersService,
    private formBuilder: FormBuilder
  ) {
    this.publisherForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.publisherForm.invalid) return;

    const publisher: CreatePublisherDTO = {
      name: this.publisherForm.value.name,
    };

    this.service.create(publisher);
    this.publisherForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.publisherForm.reset();
  }
}
