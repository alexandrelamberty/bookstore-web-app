import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  isConnected: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.$isAuthenticated.subscribe((isAuthenticated) => {
      console.log('AuthGuard ', isAuthenticated);
      this.isConnected = isAuthenticated;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isConnected) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isConnected) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
