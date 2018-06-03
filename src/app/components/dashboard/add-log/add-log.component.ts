import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogsService } from '../../../services/logs.service';
import { NotificationService } from '../../../services/notification.service';
import { WeekPipe } from '../../../pipes/week.pipe';
// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../../../store';
// import { INCREMENT } from '../../../actions';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.sass'],
  providers: [WeekPipe]
})
export class AddLogComponent implements OnInit {
  // showAddLog: boolean;
  // @select() counter;
  formSuccesfullySubmited = false;
  updateLog: {};
  today = Date.now();
  myForm: FormGroup;
  addLog = {
    text: '',
    day: ''
  };
  logs: Array<any>;
  newLog: {
    week: number,
    userId: string,
    type: string,
    text: Array<any>,
    days: Array<object>
  };
  alert = '';

  constructor(
    private _logsService: LogsService,
    private _notificationService: NotificationService,
    private fb: FormBuilder, private weekPipe: WeekPipe,
    ) {
      // this.getAllLogs();
    }
    @Input() userIdofCurrent;
    @Input() showAddLog: string;
    @Output() selectStory = new EventEmitter<boolean>();
    @Output() callFakeLogs = new EventEmitter<string>();

  // increment() {
  //   this.ngRedux.dispatch({ type: INCREMENT });
  // }
  onSelectStory() {
    this.selectStory.emit(true);
  }
  // getAllLogs() {
  //   this._logsService.getAllLogs(this.userIdofCurrent)
  //     .subscribe((res) => {
  //       this.logs = res;
  //   });
  // }
  onSubmit(f: FormGroup) {
    const type = f.value.type ? 'personal' : 'work';
    const week = f.value.week ? parseInt(f.value.week, 10) : this.weekPipe.transform(new Date(this.today));
    // If log with this week and type exists, update it
    for (let i = 0; i < this.logs.length; i++) {
      if (parseInt(f.value.week, 10) === this.logs[i].week && type === this.logs[i].type) {
        this.updateExistingLog(f, type, week);
        this.addLog.text = '';
        this.addLog.day = '';
        this.myForm.controls['text'].markAsUntouched();
        return;
      }
    }
    // If log with this week and type doesn't exists, create it
    this.insertLog(f, type, week);
    this.addLog.text = '';
    this.addLog.day = '';
    this.myForm.controls['text'].markAsUntouched();
  }
  insertLog(f, type, week) {
    // If the day is not filled
    if (f.value.day !== '') {
      this.newLog = {
        week: week,
        userId: this.userIdofCurrent.userId,
        type: type,
        text: [],
        days: [{ 'day': f.value.day, 'text': f.value.text }]
      };
    } else {
      this.newLog = {
        week: week,
        userId: this.userIdofCurrent.userId,
        type: type,
        text: f.value.text,
        days: []
      };
    }
    console.log(this.newLog);
    this._logsService.insertLog(this.newLog)
    .then((res: any) => {
      console.log(res);
      if (res.message = 'Log has been succesfully added.') {
        this._notificationService.showNotification('Log has been added! 📃💪🎉');
        // Force change detection on logs-container component somehow
      } else {
        this._notificationService.showNotification('There was a problem trying to save log.⚠️⚠️ ');
      }
      });

  }

  updateExistingLog(f, type, week) {
    for (let i = 0; i < this.logs.length; i++) {
      if (parseInt(f.value.week, 10) === this.logs[i].week && type === this.logs[i].type) {
        if ('days' in this.logs[i] === false) {
          this.logs[i].days = [];
        }
        if (f.value.day !== '') {
          const newDayToPush = { 'day': f.value.day, 'text': f.value.text };
          this.logs[i].days.push(newDayToPush);
          this.updateLog = {
            _id: this.logs[i]._id,
            week: week,
            userId: this.logs[i].userId,
            type: type,
            text: this.logs[i].text,
            days: this.logs[i].days
          };
          console.log('Insert 3');
        } else {
          if (typeof (this.logs[i].text) === typeof (Array())) {
            console.log(this.logs[i].text);
            const newWeekToPush = { 'id': 1, 'text': f.value.text };
            this.logs[i].text.push(newWeekToPush);
            this.updateLog = {
              _id: this.logs[i]._id,
              week: this.logs[i].week,
              userId: this.logs[i].userId,
              type: type,
              text: this.logs[i].text,
              days: this.logs[i].days
            };
            console.log('Insert 4');
          }
          if (typeof (this.logs[i].text) === typeof (String())) {
            const newWeekArray = [{ 'id': 0, 'text': this.logs[i].text }];
            const newWeekToPush = { 'id': 1, 'text': f.value.text };
            newWeekArray.push(newWeekToPush);
            this.updateLog = {
              _id: this.logs[i]._id,
              userId: this.logs[i].userId,
              week: this.logs[i].week,
              type: type,
              text: newWeekArray,
              days: this.logs[i].days
            };
            console.log('Insert 4.2');
          }
        }
        console.log(this.updateLog);
        this._logsService.updateLog(this.updateLog);
        this._notificationService.showNotification('Log has been updated! ✏️');
        this.logs.push(this.updateLog);
        this.callFakeLogs.emit('getFakeLogs');
        return;
      }
    }
  }
// Make it as a service
  showAlert(text) {
    this.formSuccesfullySubmited = true;
    this.alert = text;
    setTimeout(() => this.formSuccesfullySubmited = false, 3000);
 }

  ngOnInit() {
    this.myForm = this.fb.group({
      type: '',
      week: ['', Validators.max(52)],
      day: '',
      text: ['', Validators.required]
    });
  }

}
