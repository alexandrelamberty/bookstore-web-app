import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GenresRoutingModule } from './genres-routing.module';
import { GenreDetailsComponent } from './components/genre-details/genre-details.component';
import { GenreFormComponent } from './components/genre-form/genre-form.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenresViewComponent } from './components/genres-view/genres-view.component';
import { GenresComponent } from './pages/genres/genres.component';
import { GenresService } from './services/genres.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GenresRoutingModule,
  ],
  providers: [GenresService],
  exports: [GenresComponent],
  declarations: [
    GenresComponent,
    GenreFormComponent,
    GenreListComponent,
    GenreDetailsComponent,
    GenresViewComponent,
  ],
})
export class GenresModule {}
