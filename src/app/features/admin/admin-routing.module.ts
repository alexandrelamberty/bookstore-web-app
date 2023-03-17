import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BooksViewComponent } from './pages/books-view/books-view.component';
import { BooksEditComponent } from './pages/books-edit/books-edit.component';
import { AuthorsViewComponent } from './pages/authors-view/authors-view.component';
import { AuthorsEditComponent } from './pages/authors-edit/authors-edit.component';
import { PublishersViewComponent } from './pages/publishers-view/publishers-view.component';
import { PublishersEditComponent } from './pages/publishers-edit/publishers-edit.component';
import { GenresViewComponent } from './pages/genres-view/genres-view.component';
import { GenresEditComponent } from './pages/genres-edit/genres-edit.component';
import { UsersViewComponent } from './pages/users-view/users-view.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';
import { BooksAddComponent } from './pages/books-add/books-add.component';
import { GenresAddComponent } from './pages/genres-add/genres-add.component';
import { PublishersAddComponent } from './pages/publishers-add/publishers-add.component';
import { AuthorsAddComponent } from './pages/authors-add/authors-add.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'books', component: BooksViewComponent },
      { path: 'books/add', component: BooksAddComponent },
      { path: 'books/:id/edit', component: BooksEditComponent },
      { path: 'authors', component: AuthorsViewComponent },
      { path: 'authors/add', component: AuthorsAddComponent },
      { path: 'authors/:id/edit', component: AuthorsEditComponent },
      { path: 'publishers', component: PublishersViewComponent },
      { path: 'publishers/add', component: PublishersAddComponent },
      { path: 'publishers/:id/edit', component: PublishersEditComponent },
      { path: 'genres', component: GenresViewComponent },
      { path: 'genres/add', component: GenresAddComponent },
      { path: 'genres/:id/edit', component: GenresEditComponent },
      { path: 'users', component: UsersViewComponent },
      { path: 'users/:id/edit', component: UsersEditComponent },
      { path: 'orders', component: DashboardComponent },
      { path: 'orders/:id/edit', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
