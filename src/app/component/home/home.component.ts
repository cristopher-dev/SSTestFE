import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data = [];
  constructor() {}

  ngOnInit(): void {}

  dropDownListEmitter(event: any) {
    this.data = event;
  }
}
