import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  url = environment.host;

  constructor(private httpClient: HttpClient) {}

  create(body: any, pathname: string) {
    // return this.httpClient.post(this.url + 'table-data1', body);
    return this.httpClient.post(this.url + pathname, body);
  }

  findAll(pathname: string) {
    // return this.httpClient.get(this.url + 'table-data1');
    return this.httpClient.get(this.url + pathname);
  }

  update(id: any, body: any, pathname: string) {
    // return this.httpClient.patch(this.url + 'table-data1/' + id, body);
    return this.httpClient.patch(this.url + pathname + id, body);
  }

  remove(id: any, pathname: string) {
    // return this.httpClient.delete(this.url + 'table-data1/' + id);
    return this.httpClient.delete(this.url + pathname + id);
  }
}
