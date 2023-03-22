import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthResult } from '../../models/auth-result';
import { Subscription } from 'rxjs';

/**
 * Reactive form with FormBuilder service.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loginSubscription: Subscription = new Subscription();

  loginForm = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
    ]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(6),
      Validators.maxLength(25),
    ]),
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  onSubmit(): void {
    const user = this.loginForm.value;
    this.loginSubscription = this.authService.login(user).subscribe({
      next: (res: AuthResult) => {
        // FIXME: move to service
        localStorage.setItem('token', res.result.token);
        localStorage.setItem('userId', res.result.user.id.toString());
        localStorage.setItem('userFirstName', res.result.user.firstName);
        localStorage.setItem('userRole', res.result.user.role);
      },
      error: (error) => {
        console.log('LoginForm Error', error);
        // FIXME: notification service ?
      },
      complete: () => {
        this.loginForm.reset();
        this.router.navigate(['/']);
      },
    });
  }
}
