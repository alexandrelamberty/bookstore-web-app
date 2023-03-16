import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  // Receive from parent [selectedBookTitle]="parentData"
  @Input() book: any = "sdfsdf"

  // test 
  test:string = "hello"

  ngOnInit() {
    console.log(BookDetailsComponent.name, "OnInit")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("BookDetailsComponent::OnChange", changes)
    // changes.prop contains the old and the new value...
  }

  constructor(){
    console.log(BookDetailsComponent.name)
  }
}
