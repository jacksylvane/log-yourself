import { Component, OnInit, Input,  } from '@angular/core';
import { LogsService } from '../../../services/logs.service';
import { NotificationService } from '../../../services/notification.service';
import { easeInOut, expandCard } from '../../../animations';


@Component({
  selector: 'app-logs-container',
  templateUrl: './logs-container.component.html',
  styleUrls: ['./logs-container.component.sass'],
  animations: [
    easeInOut,
    expandCard
  ],
})
export class LogsContainerComponent implements OnInit {
  @Input() showAddLog: string;
  @Input() userIdofCurrent;
  logs: Array<any>;
  currentShowbtn = 0;
  current = {
    number: 0,
    index: 'k'
  };
  showConfirmDelete = false;
  logToDeleteIndex: number;
  logToDeleteId: number;
  constructor(private _logsService: LogsService, private _notificationService: NotificationService) {
     this.getAllLogs();
   }
  /* Determines color of a card header based on type of a log */
  getClass(type) {
    if (type.type === 'personal') {
      return 'personal';
    } else {
      return 'work';
    }
  }
  getDateOfWeek(w, y) {
    const d = (1 + (w - 1) * 7); // 1st of January + 7 days for each week
    return new Date(y, 0, d);
  }
  getEndingDateOfWeek(w, y) {
    const d = ((1 + (w - 1) * 7)) + 6; // func  getDateOfWeek + 6 days
    return new Date(y, 0, d);
  }
  getAllLogs() {
    this.currentShowbtn = 0;
    this._logsService.getAllLogs(this.userIdofCurrent)
      .subscribe((res) => {
        this.logs = res;
        console.log(this.logs);
        for (let i = 0; i < this.logs.length; i++) {
          this.logs[i].weekStart = this.getDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].weekEnd = this.getEndingDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].showText = false;
          if ('days' in this.logs[i]) {
            this.logs[i].dayEntries = this.logs[i].days.length;
          } else {
            this.logs[i].dayEntries = 0;
          }
          if (this.logs[i].text === '') {
            this.logs[i].weekEntries = 0;
          } else {
            this.logs[i].weekEntries = 1;
          }
          if (typeof (this.logs[i].text) === typeof (Array())) {
            this.logs[i].weekEntries = this.logs[i].text.length;
          }
          if (typeof (this.logs[i].text) === typeof (String())) {
            this.logs[i].text = [{'id': 0, 'text': this.logs[i].text}];
          }
          if (this.logs[i].text.length === 0) {
            this.logs[i].textToshow = this.logs[i].days[0].text;
          } else {
            this.logs[i].textToshow = this.logs[i].text[0].text;
          }
        }
      });
  }
  showWorkLogs() {
    this.currentShowbtn = 1;
    this._logsService.getWorkLogs(this.userIdofCurrent.userId)
    .subscribe((res) => {
      this.logs = res;
        for (let i = 0; i < this.logs.length; i++) {
          this.logs[i].weekStart = this.getDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].weekEnd = this.getEndingDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].showText = false;
          if ('days' in this.logs[i]) {
            this.logs[i].dayEntries = this.logs[i].days.length;
          } else {
            this.logs[i].dayEntries = 0;
          }
          if (this.logs[i].text === '') {
            this.logs[i].weekEntries = 0;
          } else {
            this.logs[i].weekEntries = 1;
          }
        }
  });
}
  /* Shows confirmation window and stores index od wished number */
  initDelete(i, id) {
    this.showConfirmDelete = true;
    this.logToDeleteIndex = i;
    this.logToDeleteId = id;
  }

  /* Deletes log based on stored variable created by initDelete() */
  deleteLog(i, id) {
    this.showConfirmDelete = false;
    this._logsService.deleteLog(this.logToDeleteId);
    this.logs.splice(this.logToDeleteIndex, 1);
    this._notificationService.showNotification('Log has been deleted! 💣🗑️');
  }
  showPersonalLogs() {
    this.currentShowbtn = 2;
    this._logsService.getPersonalLogs(this.userIdofCurrent.userId)
      .subscribe((res) => {
       this.logs = res;
        // console.log(res);
        for (let i = 0; i < this.logs.length; i++) {
          this.logs[i].weekStart = this.getDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].weekEnd = this.getEndingDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].showText = false;
          if ('days' in this.logs[i]) {
            this.logs[i].dayEntries = this.logs[i].days.length;
          } else {
            this.logs[i].dayEntries = 0;
          }
          if (this.logs[i].text === '') {
            this.logs[i].weekEntries = 0;
          } else {
            this.logs[i].weekEntries = 1;
          }
        }
      });
  }
  expandCard(i, event) {
    if (event.target.tagName === 'BUTTON' || event.target.attributes.class.value.includes('text')) {
      return;
    }
    this.logs[i].showText = !this.logs[i].showText;
    setTimeout(function () {
      const x = document.querySelector(`[data-index="${i}"]`);
      x.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }
  getActiveClass(index, letter, text) {
    if (Array.isArray(text)) {
      if (text.length === 0) {
        return 'active';
      }
    }
    if (index === this.current.number && letter === this.current.index) {
      return 'active';
    } else {
      return false;
    }
  }
  ngOnInit() {
    this._logsService.getBS()
      .subscribe((res) => {
        console.log(res.data);
        this.getAllLogs();
      });
    // setTimeout(() => {
    //   this.getAllLogs();
    // }, 10000);
  }

}
