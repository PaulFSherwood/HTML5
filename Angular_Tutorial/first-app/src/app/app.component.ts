import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name              = 'bacon';                       // Variables for the html f
  ServerName        = 'Apollo';
  ServerPID         = 11;
  ServerStatus      = 'offline';
  statusFlag        = false;
  buttonState       = true;
  FName             = '';
  buttonStateFName  = true;
  flag = true;
  paraFlagCounter = 1;
  paraFlag = true;
  paraSetStyle = false;

  studentRoster = ['bob', 'tim', 'jen'];
  currentName = '';

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
    // this.buttonStateFName = false;
  }

  toggleFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    if (this.flag === true ){
      return 'green';
    } else {
      return 'red';
    }
  }

  add() {
    if (this.currentName != '') {
      this.studentRoster.push(this.currentName);
    }
  }

  toggleParagraph() {
    this.paraFlag = !this.paraFlag;

    console.log(this.paraFlagCounter);

    if (this.paraFlagCounter < 5) {
      this.paraFlagCounter++;
      return this.paraFlag;
    } else if (this.paraFlagCounter >= 5 ) {
      return this.paraSetStyle = true;
    } else {
      return this.paraSetStyle;
    }
  }

}