import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorsViewComponent } from './components/authors-view/authors-view.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorsService } from './services/authors.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
  ],
  providers: [AuthorsService],
  exports: [AuthorsComponent],
  declarations: [
    AuthorsComponent,
    AuthorFormComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    AuthorsViewComponent,
  ],
})
export class AuthorsModule {}
