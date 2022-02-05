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
  pathnames: string = '';

  constructor(private tableDataService: TableDataService) {}

  createNewProduct(): table {
    return new table();
  }

  saveHandler(e: any) {
    this.selectDate(e.dataItem);

    const pathname = this.data.tableDetail.name.replace(' ', '-').toLowerCase();
    this.pathnames = pathname;
    let body = e.dataItem;
    const id = e.dataItem.id;
    this.opened = false;

    Object.keys(e.dataItem).forEach((v: string) => {
      if (body[v]) {
        body[v] = body[v] + '';
        return;
      }

      delete body[v];
    });

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

  selectDate(dataItem: any) {
    const format = this.data.tableDetail.columns.filter((v: any) => v.format);
    const dateFormat = format[0].format;

    switch (dateFormat) {
      case 'HH:mm:ss':
        this.formatHhMmSs(dataItem, format);
        break;

      default:
        break;
    }
  }

  formatHhMmSs(dataItem: any, format: any) {
    const splitDate = dataItem[format[0].header].split(':');

    if (splitDate.length < 3) {
      this.refresh(this.pathnames);
      return;
    }

    const [hh, mm, ss] = splitDate;

    const date = new Date();
    date.setHours(hh);
    date.setMinutes(mm);
    date.setSeconds(ss);

    dataItem[format[0].header] = date.toISOString();
  }

  formatYyyyMmDd(dataItem: any, format: any) {
    const column = dataItem[format[0].header];

    dataItem[format[0].header] = new Date(column).toISOString();
  }
}
