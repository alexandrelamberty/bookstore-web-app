import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './pages/authors/authors.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsComponent,
  },
  {
    path: ':id',
    component: AuthorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
