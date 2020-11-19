import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'bacon';                       // Variables for the html f
  ServerName = 'Apollo';
  ServerPID = 11;
  ServerStatus = 'offline';
  statusFlag = false;
  buttonState = true;
  FName = '';

  constructor() {
    setTimeout(() => {
      this.buttonState = false;
    }, 2500);
  }

  toggleServerStatus() {
    this.statusFlag = !this.statusFlag;
  //   if (this.statusFlag === true) {
  //     this.ServerStatus = 'online';
  //   } else {
  //     this.ServerStatus = 'offline';
  //   }
  //   return this.ServerStatus;
    return (this.statusFlag ? this.ServerStatus = 'online' : this.ServerStatus = 'offline');
  }
  clearFNameField(){
    this.FName = '';
  }

}