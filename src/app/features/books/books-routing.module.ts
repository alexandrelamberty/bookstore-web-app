import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { BooksDetailsComponent } from './pages/books-details/books-details.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: ':id',
    component: BooksDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
