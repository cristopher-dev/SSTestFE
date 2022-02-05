import { Component, Input, OnInit } from '@angular/core';
import { table } from './model';
import { TableDataService } from '../service/table-data.service';

@Component({
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.css'],
})
export class KendoGridComponent {
  @Input() data: any = {};
  message: string = '';
  opened: boolean = false;

  constructor(private tableDataService: TableDataService) {}

  createNewProduct(): table {
    return new table();
  }

  saveHandler(e: any) {
    const pathname = this.data.tableDetail.name.replace(' ', '-').toLowerCase();
    const body = e.dataItem;
    const id = e.dataItem.id;
    this.opened = false;
    if (e.isNew) {
      this.tableDataService.create(pathname, body).subscribe(
        (obs: any) => {
          this.refresh(pathname);
        },
        (err) => {
          this.refresh(pathname);
          this.message = err.error.message;
          this.opened = true;
        }
      );

      return;
    }

    this.tableDataService.update(pathname, id, body).subscribe(
      (obs: any) => {
        this.refresh(pathname);
      },
      (err) => {
        this.refresh(pathname);
        this.message = err.error.message;
        this.opened = true;
      }
    );
  }

  removeHandler(e: any) {
    const pathname = this.data.tableDetail.name.replace(' ', '-').toLowerCase();

    const id = e.dataItem.id;

    this.tableDataService.remove(pathname, id).subscribe(() => {});
  }
  refresh(pathname: string) {
    this.tableDataService.findAll(pathname).subscribe((obs: any) => {
      this.data.table = obs;
    });
  }
}
