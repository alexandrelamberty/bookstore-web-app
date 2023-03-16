import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination-control/pagination.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';

@NgModule({
  imports: [CommonModule],
  exports: [PaginationComponent, FilterDropdownComponent],
  declarations: [PaginationComponent, FilterDropdownComponent],
})
export class SharedModule {}
