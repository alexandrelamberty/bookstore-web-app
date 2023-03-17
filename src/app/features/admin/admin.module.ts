import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { BooksViewComponent } from './pages/books-view/books-view.component';
import { BooksEditComponent } from './pages/books-edit/books-edit.component';
import { AuthorsEditComponent } from './pages/authors-edit/authors-edit.component';
import { AuthorsViewComponent } from './pages/authors-view/authors-view.component';
import { GenresViewComponent } from './pages/genres-view/genres-view.component';
import { GenresEditComponent } from './pages/genres-edit/genres-edit.component';
import { PublishersEditComponent } from './pages/publishers-edit/publishers-edit.component';
import { PublishersViewComponent } from './pages/publishers-view/publishers-view.component';
import { UsersViewComponent } from './pages/users-view/users-view.component';
import { UsersEditComponent } from './pages/users-edit/users-edit.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  declarations: [
    DashboardComponent,
    LayoutComponent,
    BooksViewComponent,
    BooksEditComponent,
    AuthorsEditComponent,
    AuthorsViewComponent,
    GenresViewComponent,
    GenresEditComponent,
    PublishersEditComponent,
    PublishersViewComponent,
    UsersViewComponent,
    UsersEditComponent,
  ],
})
export class AdminModule {}
