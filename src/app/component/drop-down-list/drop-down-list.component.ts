import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableData1Service } from '../service/table-data1.service';
import { TableData2Service } from '../service/table-data2.service';
import { TableData3Service } from '../service/table-data3.service';

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
    private tableData1Service: TableData1Service,
    private tableData2Service: TableData2Service,
    private tableData3Service: TableData3Service
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

      this.tableData1Service.findAll().subscribe((obs: any) => {
        this.dropDownListEmitter.emit({
          table: obs,
          columnNames,
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

        this.tableData1Service.findAll().subscribe((obs: any) => {
          this.dropDownListEmitter.emit({
            table: obs,
            columnNames,
          });
        });
        break;

      case 'Tabla 2':
        name = 'Tabla 2';

        index = this.tableDetail.findIndex((value) => value.name === name);

        columnNames = this.columnName(this.tableDetail[index].columns);

        this.tableData2Service.findAll().subscribe((obs: any) => {
          this.dropDownListEmitter.emit({
            table: obs,
            columnNames,
          });
        });
        break;

      case 'Tabla 3':
        name = 'Tabla 3';

        index = this.tableDetail.findIndex((value) => value.name === name);

        columnNames = this.columnName(this.tableDetail[index].columns);

        this.tableData3Service.findAll().subscribe((obs: any) => {
          this.dropDownListEmitter.emit({
            table: obs,
            columnNames,
          });
        });
        break;

      default:
        break;
    }
  }
}
