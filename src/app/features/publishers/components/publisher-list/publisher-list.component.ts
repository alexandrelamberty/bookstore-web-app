import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PublishersService } from '../../services/publishers.service';
import { Publisher } from '../../model/publisher.model';

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
    console.log('PublisherListComponent');
    this.selectPublisherEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    console.log(PublisherListComponent.name);
    this.publishers = this.publishersService.getPublishers();
  }

  deletePublisher(publisher: Publisher) {
    console.log('PublisherListComponent::deletePublisher', publisher);
  }

  selectPublisher(publisher: Publisher) {
    console.log('PublisherListComponent::selectPublisher', publisher);
    // Emit data to the parent
    this.selectPublisherEvent.emit({ title: publisher.name });
  }
}
