import { Component, Input, OnInit } from '@angular/core';
import { table } from './model';
import { TableDataService } from '../service/table-data.service';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css'],
})
export class KendoGridComponent {
  @Input() data: any = [];

  constructor(private tableDataService: TableDataService) {}

  createNewProduct(): table {
    return new table();
  }

  saveHandler(e: any) {
    const pathname = this.data.tableDetail.name.replace(' ', '-').toLowerCase();
    const body = e.dataItem;
    const id = e.dataItem.id;
    if (e.isNew) {
      this.tableDataService.create(pathname, body).subscribe(
        (obs: any) => {
          console.log();
        },
        (err) => {
          console.log();
        }
      );

      return;
    }

    this.tableDataService.update(pathname, id, body).subscribe((obs) => {});
  }

  removeHandler(e: any) {
    const pathname = this.data.tableDetail.name.replace(' ', '-').toLowerCase();

    const id = e.dataItem.id;

    this.tableDataService.remove(pathname, id).subscribe(() => {});
  }
}
