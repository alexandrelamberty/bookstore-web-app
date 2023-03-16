import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password-form',
  templateUrl: './recover-password-form.component.html',
  styleUrls: ['./recover-password-form.component.css'],
})
export class RecoverPasswordFormComponent {
  recoverForm = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    console.log('onSubmit ', this.recoverForm.value);
    const user = this.recoverForm.value;
    this.authService.recoverPassword(user);
    this.recoverForm.reset();
  }
}
