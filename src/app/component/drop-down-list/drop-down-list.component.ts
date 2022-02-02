import { Component, OnInit } from '@angular/core';

import { DropDownListService } from './service/drop-down-list.service';
import { ITableType } from './interface/drop-down-list.interface';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css'],
})
export class DropDownListComponent implements OnInit {
  public listItems: ITableType[] = [];
  public selectedValue = 0;

  constructor(private dropDownListService: DropDownListService) {}

  ngOnInit(): void {
    this.dropDownListService.getTables().subscribe((obs) => {
      let save: ITableType[] = [];

      obs.forEach((value, index) => save.push({ ...value, value: index }));

      this.listItems = save;
    });
  }

  selectionChange(event: any) {
    console.log(event);
  }
}
