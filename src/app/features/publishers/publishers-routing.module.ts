import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { PublishersDetailsComponent } from './pages/publishers-details/publishers-details.component';

const routes: Routes = [
  {
    path: '',
    component: PublishersComponent,
  },
  {
    path: ':id',
    component: PublishersDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishersRoutingModule {}
