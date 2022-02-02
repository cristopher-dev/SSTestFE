import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';

@NgModule({
  declarations: [HomeComponent, DropDownListComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class ComponentModule {}
