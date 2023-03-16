import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-genre-details',
  templateUrl: './genre-details.component.html',
  styleUrls: ['./genre-details.component.css'],
})
export class GenreDetailsComponent implements OnInit {
  // Receive from parent [selectedGenreTitle]="parentData"
  @Input() genre: any = 'sdfsdf';

  // test
  test: string = 'hello';

  ngOnInit() {
    console.log(GenreDetailsComponent.name, 'OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('GenreDetailsComponent::OnChange', changes);
    // changes.prop contains the old and the new value...
  }

  constructor() {
    console.log(GenreDetailsComponent.name);
  }
}
