import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PublishersService } from '../../services/publishers.service';
import { Publisher } from '../../models/publisher.model';
import { PublishersResponse } from '../../models/publisher-responses.model';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css'],
  providers: [PublishersService],
})
export class PublisherListComponent implements OnInit {
  // Event to be emited to the parent
  @Output() selectPublisherEvent: EventEmitter<{ title: string }>;

  // Publishers to show in the list
  publishers: Publisher[] = [];

  constructor(private publishersService: PublishersService) {
    this.selectPublisherEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    this.publishersService.getAll().subscribe({
      next: (res: PublishersResponse) => {
        this.publishers = res.results;
      },
    });
  }

  deletePublisher(publisher: Publisher) {}

  selectPublisher(publisher: Publisher) {
    // Emit data to the parent
    this.selectPublisherEvent.emit({ title: publisher.name });
  }
}
