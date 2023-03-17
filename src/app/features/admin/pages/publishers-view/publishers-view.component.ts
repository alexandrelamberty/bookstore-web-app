import { Component } from '@angular/core';
import { PublishersResponse } from '../../../publishers/models/publisher-responses.model';
import { Publisher } from '../../../publishers/models/publisher.model';
import { PublishersService } from '../../../publishers/services/publishers.service';

@Component({
  selector: 'app-publishers-view',
  templateUrl: './publishers-view.component.html',
  styleUrls: ['./publishers-view.component.css'],
})
export class PublishersViewComponent {
  publishers: Publisher[] | undefined = undefined;
  constructor(private publishersService: PublishersService) {}
  ngOnInit(): void {
    this.publishersService.getAll().subscribe({
      next: (res: PublishersResponse) => {
        this.publishers = res.results;
      },
    });
  }
}
