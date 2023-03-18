import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  newsletterForm: FormGroup;

  constructor(
    /*private newsletterService: NewsletterService, */
    private formBuilder: FormBuilder
  ) {
    this.newsletterForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(80),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // newsletter service call
  }
}
