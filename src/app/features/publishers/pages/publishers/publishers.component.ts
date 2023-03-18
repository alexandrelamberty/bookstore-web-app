import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css'],
})
export class PublishersComponent {
  constructor(private router: Router) {}

  onSelectedItem(event: { publisherId: string }) {
    this.router.navigate(['publishers', event.publisherId]);
  }
}
