import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableData2Service {
  url = environment.host;

  constructor(private httpClient: HttpClient) {}

  create() {}
  findAll() {}
  update() {}
  remove() {}
}
