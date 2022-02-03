import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableDataService } from '../service/table-data.service';

import { DropDownListService } from './service/drop-down-list.service';
import { ITableType } from './interface/drop-down-list.interface';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css'],
})
export class DropDownListComponent implements OnInit {
  @Output() dropDownListEmitter = new EventEmitter();
  public listItems: ITableType[] = [];
  public selectedValue = 0;
  public tableDetail: any[] = [];

  constructor(
    private dropDownListService: DropDownListService,
    private TableDataService: TableDataService
  ) {}

  ngOnInit(): void {
    this.dropDownListService.getTables().subscribe((obs) => {
      let save: ITableType[] = [];

      obs.forEach((value, index) => save.push({ ...value, value: index }));

      this.listItems = save;
    });

    this.dropDownListService.getTableDetail().subscribe((obs: any[]) => {
      this.tableDetail = obs;
      const columnNames = this.columnName(obs[this.selectedValue].columns);

      this.TableDataService.findAll('tabla-1').subscribe((obs: any) => {
        this.dropDownListEmitter.emit({
          table: obs,
          columnNames,
          tableDetail: this.tableDetail[this.selectedValue],
        });
      });
    });
  }

  columnName(data: any[]) {
    let saveKey: any = [];

    data.forEach((value) => saveKey.push(value.header));

    return [...new Set(saveKey)].map((value) => ({ field: value }));
  }

  selectionChange(event: any) {
    let name = '';
    let index = 0;
    let columnNames: any[] = [];

    switch (event.name) {
      case 'Tabla 1':
        name = 'Tabla 1';

        index = this.tableDetail.findIndex((value) => value.name === name);

        columnNames = this.columnName(this.tableDetail[index].columns);

        this.TableDataService.findAll('tabla-1').subscribe((obs: any) => {
          this.dropDownListEmitter.emit({
            table: obs,
            columnNames,
            tableDetail: this.tableDetail[index],
          });
        });
        break;

      case 'Tabla 2':
        name = 'Tabla 2';

        index = this.tableDetail.findIndex((value) => value.name === name);

        columnNames = this.columnName(this.tableDetail[index].columns);

        this.TableDataService.findAll('tabla-2').subscribe((obs: any) => {
          this.dropDownListEmitter.emit({
            table: obs,
            columnNames,
            tableDetail: this.tableDetail[index],
          });
        });
        break;

      case 'Tabla 3':
        name = 'Tabla 3';

        index = this.tableDetail.findIndex((value) => value.name === name);

        columnNames = this.columnName(this.tableDetail[index].columns);

        this.TableDataService.findAll('tabla-3').subscribe((obs: any) => {
          this.dropDownListEmitter.emit({
            table: obs,
            columnNames,
            tableDetail: this.tableDetail[index],
          });
        });
        break;

      default:
        break;
    }
  }
}
