import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { GenresDetailsComponent } from './pages/genres-details/genres-details.component';

const routes: Routes = [
  {
    path: '',
    component: GenresComponent,
  },
  {
    path: ':id',
    component: GenresDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresRoutingModule {}
