import { Component } from '@angular/core';
import { NgModule } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ServerName = 'Apollo';
  ServerPID = 11;
  ServerStatus = 'offline';
  statusFlag = false;
  buttonState = true;

  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }
  // this will be licked to the html button
  toggleServerStatus() {
    this.statusFlag = !this.statusFlag;
    if (this.statusFlag === true) {
      this.ServerStatus = 'online';
    } else {
      this.ServerStatus = 'offline';
    }
    return this.ServerStatus;
  }
}
