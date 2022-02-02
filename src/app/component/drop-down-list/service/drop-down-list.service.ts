import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ITableStructure,
  ITableType,
} from '../interface/drop-down-list.interface';

@Injectable({
  providedIn: 'root',
})
export class DropDownListService {
  url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getTables() {
    return this.httpClient.get<ITableType[]>(this.url + 'table-structure');
  }

  getTableDetail() {
    return this.httpClient.get<ITableStructure[]>(
      this.url + 'table-structure/detail'
    );
  }
}
