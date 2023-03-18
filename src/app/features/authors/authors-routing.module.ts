import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsViewComponent } from './pages/authors-view/authors-view.component';
import { AuthorsDetailsComponent } from './pages/authors-details/authors-details.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsViewComponent,
  },
  {
    path: ':id',
    component: AuthorsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
