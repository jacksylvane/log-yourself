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
    typeInitial: string
  };
  newLog: {
    week: number,
    day: number,
    type: string,
    text: string,
  };
  logs: Array<any>;
  showConfirmDelete = false;
  logToDeleteIndex: number;
  logToDeleteId: number;

  constructor(private _logsService: LogsService) {
    // Access the Data Service's getUsers() method we defined
    this.getAllLogs();
  }

  getAllLogs() {
    this._logsService.getUsers()
      .subscribe((res) => {
        this.logs = res;
        console.log(this.logs);
        this.logs.forEach(function (obj) {
          if (obj.type === 'work') {
            obj.typeInitial = 'W';
          } else {
            obj.typeInitial = 'P';
          }
        });
      });
    /* for (let index = 0; index < this.logs.length; index++) {
        this.logs[index];
      } */
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
    this.newLog = {
     // tslint:disable-next-line:radix
     week: parseInt(f.value.week), day: f.value.day, type: type, text: f.value.text};
     console.log(this.newLog);
     this._logsService.insertLog(this.newLog);
     console.log(this.logs);
     this._logsService.getUsers()
       .subscribe((res) => {
         this.logs = res;
         console.log(this.logs);
         this.logs.forEach(function (obj) {
           if (obj.type === 'work') {
             obj.typeInitial = 'W';
           } else {
             obj.typeInitial = 'P';
           }
         });
       });
    // this.formSuccesfullySubmited = true;
    //  setTimeout(() => this.formSuccesfullySubmited = false, 3000);
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
