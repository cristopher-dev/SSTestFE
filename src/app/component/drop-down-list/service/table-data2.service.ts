import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableData2Service {
  constructor(private httpClient: HttpClient) {}

  create() {}
  findAll() {}
  update() {}
  remove() {}
}
