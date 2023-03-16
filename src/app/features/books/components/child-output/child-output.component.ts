import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css'],
})
export class ChildOutputComponent implements OnInit {
  @Output() bookTitleCreated = new EventEmitter<{ title: string }>();
  bookTitle: string = 'sdfsdf';
  constructor() {}
  ngOnInit() {}

  onAddBook() {
    this.bookTitleCreated.emit({ title: this.bookTitle });
  }
}