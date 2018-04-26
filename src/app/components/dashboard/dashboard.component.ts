import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import { easeInOut, expandCard } from '../../animations';
import { WeekPipe } from '../../pipes/week.pipe';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [
    easeInOut,
    expandCard
  ],
  providers: [ WeekPipe ]
})

export class DashboardComponent implements OnInit {
  today = Date.now();
  userIdofCurrent = { 'userId': '72315f' };
  formSuccesfullySubmited = false;
  log: {
    week: number,
    day: number,
    type: string,
    text: string,
    weekStart: any,
    weekEnd: any,
    textToshow: string,
  };
  logs: Array<any>;
  days: Array<object>;
  // showConfirmDelete = false;
  showAddLog = false;
  // logToDeleteIndex: number;
  // logToDeleteId: number;
  alert = '';
  constructor(private _logsService: LogsService, private weekPipe: WeekPipe ) {
  }
  getStory() {
    this.showAddLog = !this.showAddLog;
  }
  callGetFakeLogs() {
    // this.getAllLogs();
  }
  returnTrue() {
    return true;
  }
  // getFakeLogs() {
  //   this.currentShowbtn = 0;
  //   for (let i = 0; i < this.logs.length; i++) {
  //     this.logs[i].weekStart = this.getDateOfWeek(this.logs[i].week, 2017);
  //     this.logs[i].weekEnd = this.getEndingDateOfWeek(this.logs[i].week, 2017);
  //     this.logs[i].showText = false;
  //     if ('days' in this.logs[i]) {
  //       this.logs[i].dayEntries = this.logs[i].days.length;
  //     } else {
  //       this.logs[i].dayEntries = 0;
  //     }
  //     if (this.logs[i].text === '') {
  //       this.logs[i].weekEntries = 0;
  //     } else {
  //       this.logs[i].weekEntries = 1;
  //     }
  //     if (typeof (this.logs[i].text) === typeof (Array())) {
  //       this.logs[i].weekEntries = this.logs[i].text.length;
  //     }
  //     if (typeof (this.logs[i].text) === typeof (String())) {
  //       this.logs[i].text = [{'id': 0, 'text': this.logs[i].text}];
  //     }
  //     if (this.logs[i].text.length === 0) {
  //       this.logs[i].textToshow = this.logs[i].days[0].text;
  //     } else {
  //       this.logs[i].textToshow = this.logs[i].text[0].text;
  //     }
  //   }
  // }

// /* Shows confirmation window and stores index od wished number */
// initDelete(i, id) {
//   this.showConfirmDelete = true;
//   this.logToDeleteIndex = i;
//   this.logToDeleteId = id;
// }

// /* Deletes log based on stored variable created by initDelete() */
//   deleteLog(i, id) {
//     this.showConfirmDelete = false;
//     this._logsService.deleteLog(this.logToDeleteId);
//     this.logs.splice(this.logToDeleteIndex, 1);
//     this.showAlert('Log has been deleted! 💣🗑️' );
//   }

  showAlert(text) {
    this.formSuccesfullySubmited = true;
    this.alert = text;
    setTimeout(() => this.formSuccesfullySubmited = false, 3000);
  }

  ngOnInit() {
  }
}
