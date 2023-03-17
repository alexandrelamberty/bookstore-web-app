import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PublishersRoutingModule } from './publishers-routing.module';
import { PublisherDetailsComponent } from './components/publisher-details/publisher-details.component';
import { PublisherFormComponent } from './components/publisher-form/publisher-form.component';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublishersViewComponent } from './components/publishers-view/publishers-view.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { PublishersService } from './services/publishers.service';
import { PublishersDetailsComponent } from './pages/publishers-details/publishers-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PublishersRoutingModule,
  ],
  providers: [PublishersService],
  exports: [PublishersComponent],
  declarations: [
    PublishersComponent,
    PublishersDetailsComponent,
    PublisherFormComponent,
    PublisherListComponent,
    PublisherDetailsComponent,
    PublishersViewComponent,
  ],
})
export class PublishersModule {}
