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
    console.log('FooterComponent::constructor');
    this.newsletterForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(80),
      ]),
    });
  }

  ngOnInit(): void {
    console.log('FooterComponent::OnInit');
  }

  onSubmit() {
    console.log('FooterComponent::onSubmit');
    // newsletter service call
  }
}
