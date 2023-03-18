import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorsGridComponent } from './components/authors-grid/authors-grid.component';
import { AuthorsViewComponent } from './pages/authors-view/authors-view.component';
import { AuthorsService } from './services/authors.service';
import { AuthorsDetailsComponent } from './pages/authors-details/authors-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
  ],
  providers: [AuthorsService],
  declarations: [
    AuthorsViewComponent,
    AuthorsDetailsComponent,
    AuthorsGridComponent,
    AuthorFormComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
  ],
  exports: [AuthorFormComponent, AuthorListComponent, AuthorDetailsComponent],
})
export class AuthorsModule {}
