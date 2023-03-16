import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css'],
})
export class PublisherDetailsComponent implements OnInit {
  // Receive from parent [selectedPublisherTitle]="parentData"
  @Input() publisher: any = 'sdfsdf';

  // test
  test: string = 'hello';

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
