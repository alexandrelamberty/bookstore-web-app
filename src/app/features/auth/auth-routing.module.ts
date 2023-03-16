import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LayoutComponent } from '../../core/components/layout/layout.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { SettingsComponent } from '../../core/pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'logout',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'register/:id',
    component: RegisterPageComponent,
  },
  {
    path: 'recover',
    component: RecoverPasswordComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [{ path: 'settings/account', component: SettingsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
