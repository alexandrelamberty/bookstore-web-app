import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent implements OnInit {
  // Receive from parent [selectedAuthorTitle]="parentData"
  @Input() author: any = 'sdfsdf';

  ngOnInit() {
    console.log(AuthorDetailsComponent.name, 'OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('AuthorDetailsComponent::OnChange', changes);
    // changes.prop contains the old and the new value...
  }

  constructor() {
    console.log(AuthorDetailsComponent.name);
  }
}
