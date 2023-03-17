import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Publisher } from '../../models/publisher.model';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css'],
})
export class PublisherDetailsComponent implements OnInit {
  // Receive from parent [selectedPublisherTitle]="parentData"
  @Input() publisher: Publisher | undefined = undefined;

  ngOnInit() {
    console.log(PublisherDetailsComponent.name, 'OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('PublisherDetailsComponent::OnChange', changes);
    // changes.prop contains the old and the new value...
  }

  constructor() {
    console.log(PublisherDetailsComponent.name);
  }
}
