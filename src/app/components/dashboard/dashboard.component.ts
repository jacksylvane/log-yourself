import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import { easeInOut } from '../../animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [
    easeInOut
  ]
})
export class DashboardComponent implements OnInit {
  today = Date.now();
  formSuccesfullySubmited = false;
  log: {
    week: number,
    day: number,
    type: string,
    text: string,
    weekStart: any,
    weekEnd: any
  };
  newLog: {
    week: number,
    type: string,
    text: string,
    days: Array<object>
  };
  logs: Array<any>;
  showConfirmDelete = false;
  logToDeleteIndex: number;
  logToDeleteId: number;

  constructor(private _logsService: LogsService) {
    // Access the Data Service's getAllLogs() method we defined
    this.getAllLogs();
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
    this._logsService.getAllLogs()
      .subscribe((res) => {
        this.logs = res;
        for (let i = 0; i < this.logs.length; i++) {
          this.logs[i].weekStart = this.getDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].weekEnd = this.getEndingDateOfWeek(this.logs[i].week, 2017);
          if ('days' in this.logs[i]) {
            this.logs[i].dayEntries = this.logs[i].days.length;
          } else {
            this.logs[i].dayEntries = 0;
          /*   const text = { 'text': 'hee' };
            this.logs[i].days = new Array(text); */
          }
        }
  /*       this.logs.forEach(function (obj) {
          if (obj.type === 'work') {
            obj.typeInitial = 'W';
          } else {
            obj.typeInitial = 'P';
          }
        }); */
        console.log(this.logs);
      });
  }
  showWorkLogs() {
    this._logsService.getWorkLogs()
      .subscribe(res => this.logs = res);
  }

  showPersonalLogs() {
    this._logsService.getPersonalLogs()
      .subscribe(res => this.logs = res);
  }

/* Submits a new log */
   onSubmitAddLog(f) {
    let type = 'work';
    type = f.value.personal ? 'personal' : 'work' ;
    if (f.value.day !== '') {
      this.newLog = {
        week: parseInt(f.value.week, 10),
        type: type,
        text: '',
        days: [{'day' : f.value.day, 'text': f.value.text}]
      };
    } else {
      this.newLog = {
       week: parseInt(f.value.week, 10),
             type: type,
             text: f.value.text,
             days: []
            };
    }
    console.log(this.newLog);
    this._logsService.insertLog(this.newLog);
    console.log(this.logs);
    this.getAllLogs();
    this.formSuccesfullySubmited = true;
    setTimeout(() => this.formSuccesfullySubmited = false, 3000);
  }

/* Determines color of card header based on type of a log */
  getClass(type) {
    if (type.type === 'personal') {
      return 'personal';
    } else {
      return 'work';
    }
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
  }

  ngOnInit() {
    console.log(this.logs);
  }

}
