import { Component, Input, OnInit } from '@angular/core';
import { table1, table2, table3 } from './model';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css'],
})
export class KendoGridComponent {
  @Input() data: any = [];

  createNewProduct(): table1 | table2 | table3 {
    return new table3();
  }

  saveHandler(e: any) {
    console.log();
  }
  removeHandler(e: any) {
    console.log();
  }
}
