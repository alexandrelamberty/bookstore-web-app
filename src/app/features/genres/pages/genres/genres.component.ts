import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent {
  constructor(private router: Router) {}

  onSelectedItem(event: { genreId: string }) {
    this.router.navigate(['genres', event.genreId]);
  }
}
