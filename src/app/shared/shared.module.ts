import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination-control/pagination.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationComponent, FilterDropdownComponent, TableComponent],
  exports: [PaginationComponent, FilterDropdownComponent, TableComponent],
})
export class SharedModule {}
