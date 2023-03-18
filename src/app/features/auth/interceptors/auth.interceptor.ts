import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /*
    if (this.authService.isAuthenticated) {
      req = req.clone({
        headers: req.headers.set('Content-type', 'application/json'),
      });
      req = req.clone({
        headers: req.headers.set('bearer', `${localStorage.getItem('bearer')}`),
      });
    }
    return next.handle(req);
    */

    let token: string | null = localStorage.getItem('token');
    if (token && token != '') {
      let requestClone = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(requestClone);
    }
    return next.handle(req);
  }
}
