import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksViewComponent } from './components/books-view/books-view.component';
import { BooksComponent } from './pages/books/books.component';
import { BooksService } from './services/books.service';
import { BooksDetailsComponent } from './pages/books-details/books-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
  ],
  providers: [BooksService],
  exports: [BooksComponent],
  declarations: [
    BooksComponent,
    BookFormComponent,
    BookListComponent,
    BookDetailsComponent,
    BooksViewComponent,
    BooksDetailsComponent,
  ],
})
export class BooksModule {}
