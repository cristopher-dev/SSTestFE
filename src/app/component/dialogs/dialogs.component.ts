import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css'],
})
export class DialogsComponent {
  @Input() public message = 'dd';
  @Input() opened = true;

  public close(status: any) {
    this.opened = false;
  }
}
