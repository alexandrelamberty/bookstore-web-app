import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../core/components/layout/layout.component';
import { CoursesComponent } from '../courses/pages/courses/courses.component';
import { ViewComponent } from '../courses/pages/view/view.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [{ path: 'users', component: CoursesComponent }],
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [{ path: 'users/:id', component: ViewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
