import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  url = environment.host;

  constructor(private httpClient: HttpClient) {}

  create(pathname: string, body: any) {
    return this.httpClient.post(this.url + pathname, body);
  }

  findAll(pathname: string) {
    return this.httpClient.get(this.url + pathname);
  }

  update(pathname: string, id: any, body: any) {
    return this.httpClient.patch(this.url + pathname + '/' + id, body);
  }

  remove(pathname: string, id: any) {
    return this.httpClient.delete(this.url + pathname + '/' + id);
  }
}
