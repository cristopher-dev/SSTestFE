import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';

@NgModule({
  declarations: [HomeComponent, DropDownListComponent, KendoGridComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class ComponentModule {}
