import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { HomeComponent } from './home/home.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';

@NgModule({
  declarations: [HomeComponent, DropDownListComponent, KendoGridComponent],
  imports: [
    CommonModule,
    DropDownsModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    ButtonsModule,
  ],
  exports: [HomeComponent],
})
export class ComponentModule {}
