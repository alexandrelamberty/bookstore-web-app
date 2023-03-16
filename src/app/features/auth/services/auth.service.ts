import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../users/model/user.model';
import { AuthResult } from '../models/auth-result';

@Injectable()
export class AuthService {
  //
  private _isConnected$: BehaviorSubject<boolean> = new BehaviorSubject(
    localStorage.getItem('token') && localStorage.getItem('token') != ''
      ? true
      : false
  );
  isConnected$: Observable<boolean> = this._isConnected$.asObservable();

  public isAuthenticated: boolean = false;
  $isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isAuthenticated
  );

  public authenticatedUser: User | undefined = undefined;
  $authenticatedUser: BehaviorSubject<any> = new BehaviorSubject<any>(
    this.authenticatedUser
  );

  constructor(private http: HttpClient) {
    console.log(AuthService.name);
  }

  public register(user: any): Observable<AuthResult> {
    return this.http.post<AuthResult>(environment.apiURL + 'auth/login', user);
    // FIXME: tap into result
  }

  public login(user: any): Observable<AuthResult> {
    return this.http.post<AuthResult>(environment.apiURL + 'auth/login', user);
    // FIXME: tap into result
  }

  public logout(): void {
    this._isConnected$.next(false);
  }

  public recoverPassword(user: any): void {
    console.log('recoverPassword ', user);
  }

  emit() {
    console.log('emit', this.isAuthenticated);
    this._isConnected$.next(true);
    // this.$isAuthenticated.next(this.isAuthenticated);
    // this.$authenticatedUser.next(this.authenticatedUser);
  }
}
