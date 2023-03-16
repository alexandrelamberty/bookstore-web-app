import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecoverPasswordFormComponent } from './components/recover-password-form/recover-password-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    RecoverPasswordComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RecoverPasswordFormComponent,
  ],
})
export class AuthModule {}
