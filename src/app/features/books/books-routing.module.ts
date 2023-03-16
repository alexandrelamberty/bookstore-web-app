import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: ':id',
    component: BookDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
