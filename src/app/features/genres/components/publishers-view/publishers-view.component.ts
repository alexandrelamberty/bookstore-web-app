import { Component, EventEmitter, Output } from '@angular/core';
import { Publisher } from '../../model/publisher.model';
import { PublishersService } from '../../services/publishers.service';

@Component({
  selector: 'app-publishers-view',
  templateUrl: './publishers-view.component.html',
  styleUrls: ['./publishers-view.component.css'],
})
export class PublishersViewComponent {
  @Output() selectPublisherEvent: EventEmitter<{ title: string }>;

  publishers: Publisher[] = [];

  constructor(private service: PublishersService) {
    console.log('PublisherListComponent');
    this.selectPublisherEvent = new EventEmitter<{ title: string }>();
  }

  ngOnInit(): void {
    console.log(PublishersViewComponent.name);
    this.publishers = this.service.getPublishers();
  }

  selectPublisher(publisher: Publisher) {
    console.log('PublishersViewComponent::selectPublisher', publisher);
    // Emit data to the parent
    this.selectPublisherEvent.emit({ title: publisher.name });
  }
}
