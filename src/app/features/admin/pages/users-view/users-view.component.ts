import { Component } from '@angular/core';
import { User } from '../../../users/model/user.model';
import { UsersService } from '../../../users/services/users.service';
import { UsersResponse } from '../../../users/model/user-responses.model';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
})
export class UsersViewComponent {
  users: User[] | undefined = undefined;
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getAll().subscribe({
      next: (res: UsersResponse) => {
        this.users = res.results;
      },
    });
  }
}
