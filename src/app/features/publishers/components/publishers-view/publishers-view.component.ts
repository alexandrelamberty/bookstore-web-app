import { Component, EventEmitter, Output } from '@angular/core';
import { Publisher } from '../../models/publisher.model';
import { PublishersService } from '../../services/publishers.service';
import { PublishersResponse } from '../../models/publisher-responses.model';

@Component({
  selector: 'app-publishers-view',
  templateUrl: './publishers-view.component.html',
  styleUrls: ['./publishers-view.component.css'],
})
export class PublishersViewComponent {
  @Output() selectPublisherEvent: EventEmitter<{ publisherId: string }>;

  publishers: Publisher[] = [];

  constructor(private service: PublishersService) {
    this.selectPublisherEvent = new EventEmitter<{ publisherId: string }>();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (res: PublishersResponse) => {
        this.publishers = res.results;
      },
    });
  }

  selectPublisher(publisher: Publisher) {
    this.selectPublisherEvent.emit({ publisherId: publisher.id });
  }
}
