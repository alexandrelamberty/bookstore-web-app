import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { User } from '../../../features/users/model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isConnected: boolean = false;
  user: User | undefined;

  constructor(private authService: AuthService) {
    this.isConnected = this.authService.isAuthenticated;
  }

  ngOnInit(): void {
    this.authService.isConnected$.subscribe((connectionState: boolean) => {
      console.log('ETAT CONNECTION : ', connectionState);
      this.isConnected = connectionState;
    });

    //
    // this.authService.$isAuthenticated.subscribe((isAuthenticated) => {
    //   console.log('NavBarComponent ', isAuthenticated);
    //   this.isConnected = isAuthenticated;
    // });
    // this.authService.$authenticatedUser.subscribe((authenticatedUser) => {
    //   console.log('NavBarComponent ', authenticatedUser);
    //   this.user = authenticatedUser;
    // });
  }

  logout(): void {
    this.authService.logout();
  }
}
