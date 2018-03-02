import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  log: {
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
      .subscribe(res => this.logs = res);
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
    this.log = {
     // tslint:disable-next-line:radix
     week: parseInt(f.value.week), day: f.value.day, type: type, text: f.value.text};
     this._logsService.insertLog(this.log);
     console.log(this.logs);
     this._logsService.getUsers()
       .subscribe(res => this.logs = res);
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
