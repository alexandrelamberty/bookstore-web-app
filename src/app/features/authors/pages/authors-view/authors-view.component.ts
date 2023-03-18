import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-authors-view',
  templateUrl: './authors-view.component.html',
  styleUrls: ['./authors-view.component.css'],
})
export class AuthorsViewComponent {
  constructor(private router: Router) {}

  onSelectedItem(event: { authorId: string }) {
    this.router.navigate(['authors', event.authorId]);
  }
}
