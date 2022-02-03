import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableData1Service {
  constructor(private httpClient: HttpClient) {}

  create() {}
  findAll() {}
  update() {}
  remove() {}
}
