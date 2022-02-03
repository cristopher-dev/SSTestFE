import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableData1Service {
  url = environment.host;

  constructor(private httpClient: HttpClient) {}

  create(body: any) {
    return this.httpClient.post(this.url + 'table-data1', body);
  }

  findAll() {
    return this.httpClient.get(this.url + 'table-data1');
  }

  update(id: any, body: any) {
    return this.httpClient.patch(this.url + 'table-data1/' + id, body);
  }

  remove(id: any) {
    return this.httpClient.delete(this.url + 'table-data1/' + id);
  }
}
