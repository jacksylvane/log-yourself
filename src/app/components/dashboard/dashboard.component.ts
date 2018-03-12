import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import { easeInOut, expandCard } from '../../animations';
import { WeekPipe } from '../../pipes/week.pipe';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  myForm: FormGroup;
  today = Date.now();
  userId = { '_id': '5aa313360538253070a4d7a4' };
  formSuccesfullySubmited = false;
  updateLog: {};
  addLog = {
    text: 'aa'
  };
  log: {
    week: number,
    day: number,
    type: string,
    text: string,
    weekStart: any,
    weekEnd: any,
    textToshow: string,
  };
  newLog: {
    week: number,
    type: string,
    text: Array<any>,
    days: Array<object>
  };
  logs: Array<any>;
  days: Array<object>;
  showConfirmDelete = false;
  showAddLog = true;
  logToDeleteIndex: number;
  logToDeleteId: number;
  alert = '';
  current = {
    number : 0,
    index : 'k'
  };
  currentShowbtn = 0;
  constructor(private _logsService: LogsService, private weekPipe: WeekPipe, private fb: FormBuilder) {
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
    this.currentShowbtn = 0;
    this._logsService.getAllLogs(this.userId)
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
            /*   const text = { 'text': 'hee' };
            this.logs[i].days = new Array(text); */
          }
          if (this.logs[i].text === '') {
            this.logs[i].weekEntries = 0;
          } else {
            this.logs[i].weekEntries = 1;
          }
          if (typeof (this.logs[i].text) === typeof (Array())) {
            console.log('We have ' + this.logs[i].week + ' as array of objects');
            this.logs[i].weekEntries = this.logs[i].text.length;
            // this.logs[i].text = this.logs[i].text[0].text;
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
  /*       this.logs.forEach(function (obj) {
          if (obj.type === 'work') {
            obj.typeInitial = 'W';
          } else {
            obj.typeInitial = 'P';
          }
        }); */
      });
  }
  showWorkLogs() {
    this.currentShowbtn = 1;
    this._logsService.getWorkLogs(this.userId)
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
          /*   const text = { 'text': 'hee' };
            this.logs[i].days = new Array(text); */
          }
          if (this.logs[i].text === '') {
            this.logs[i].weekEntries = 0;
          } else {
            this.logs[i].weekEntries = 1;
          }
        }
  });
}

  showPersonalLogs() {
    this.currentShowbtn = 2;
    this._logsService.getPersonalLogs(this.userId)
      .subscribe((res) => {
       this.logs = res;
        console.log(res);
        for (let i = 0; i < this.logs.length; i++) {
          this.logs[i].weekStart = this.getDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].weekEnd = this.getEndingDateOfWeek(this.logs[i].week, 2017);
          this.logs[i].showText = false;
          if ('days' in this.logs[i]) {
            this.logs[i].dayEntries = this.logs[i].days.length;
          } else {
            this.logs[i].dayEntries = 0;
            /*   const text = { 'text': 'hee' };
              this.logs[i].days = new Array(text); */
          }
          if (this.logs[i].text === '') {
            this.logs[i].weekEntries = 0;
          } else {
            this.logs[i].weekEntries = 1;
          }
        }
      });
  }

/* Submits a new log */
  //  onSubmitAddLog(f) {
  //    let type = 'work';
  //    type = f.value.personal ? 'personal' : 'work' ;
  //    const week = f.value.week ? parseInt(f.value.week, 10) : this.weekPipe.transform(new Date(this.today));
  //    for (let i = 0; i < this.logs.length; i++) {
  //      if (parseInt(f.value.week, 10) === this.logs[i].week && type === this.logs[i].type ) {
  //       if ('days' in this.logs[i] === false) {
  //         this.logs[i].days = [];
  //        }
  //        if (f.value.day !== '') {
  //          const newDayToPush = { 'day': f.value.day, 'text': f.value.text };
  //          this.logs[i].days.push(newDayToPush);
  //          this.updateLog = {
  //            _id: this.logs[i]._id,
  //            week: week,
  //            type: type,
  //            text: this.logs[i].text,
  //            days: this.logs[i].days
  //           };
  //           console.log(this.updateLog);
  //         } else {
  //           this.updateLog = {
  //           _id: this.logs[i]._id,
  //           week: week,
  //           type: type,
  //           text: f.value.text,
  //           days: this.logs[i].days
  //          };
  //        }
  //        console.log(this.updateLog);
  //        this._logsService.updateLog(this.updateLog);
  //        this.getAllLogs();
  //        this.showAlert('Log has been updated! ✏️');
  //        return;
  //      }
  //    }
  //    if (f.value.day !== '') {
  //     this.newLog = {
  //       week: week,
  //       type: type,
  //       text: '',
  //       days: [{'day' : f.value.day, 'text': f.value.text}]
  //     };
  //   } else {
  //     this.newLog = {
  //     week: week,
  //     type: type,
  //     text: this.addLog.text,
  //     days: []
  //   };
  //   }
  //   console.log(this.newLog);
  //   console.log(this.newLog.text);
  //   // this._logsService.insertLog(this.newLog);
  //   console.log(this.logs);
  //   this.getAllLogs();
  //    this.addLog.text = '';
  //   //  this.f.markAsPristineAndUntouched();
  //    this.showAlert('Log has been added! 📃💪🎉');
  // }


/* Determines color of card header based on type of a log */
  getClass(type) {
    if (type.type === 'personal') {
      return 'personal';
    } else {
      return 'work';
    }
  }
getActiveClass( index, letter, text) {
  if (Array.isArray(text)) {
    if (text.length === 0) {
      return 'active';
    }
  }
  if (index === this.current.number && letter === this.current.index)  {
    return 'active';
  } else {
    return false;
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
    this.showAlert('Log has been deleted! 💣🗑️' );
  }

  showAlert(text) {
    this.formSuccesfullySubmited = true;
    this.alert = text;
    setTimeout(() => this.formSuccesfullySubmited = false, 3000);
  }

  expandCard(i, event) {
    console.log(event.target.attributes.class.value);
    if (event.target.tagName === 'BUTTON' || event.target.attributes.class.value.includes('text')) {
      return;
    }
    this.logs[i].showText = !this.logs[i].showText;
    setTimeout(function () {
      const x = document.querySelector(`[data-index="${i}"]`);
      x.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }
  onSubmit(f: FormGroup) {
    // f.value.type = f.value.type ? 'personal' : 'work';
    // f.value.week = f.value.week ? parseInt(f.value.week, 10) : this.weekPipe.transform(new Date(this.today));
    // console.log('Valid?', f.valid); // true or false
    console.log('Type', f.value.type);
    // console.log('Day', f.value.day);
    // console.log('Week', f.value.week);
    // console.log('Message', f.value.text);
    const type = f.value.type ? 'personal' : 'work';
    const week = f.value.week ? parseInt(f.value.week, 10) : this.weekPipe.transform(new Date(this.today));
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
            type: type,
            text: this.logs[i].text,
            days: this.logs[i].days
          };
          console.log(1);
          console.log(this.updateLog);
        } else {
          if (typeof (this.logs[i].text) === typeof(Array()) ) {
            // newWeekArray = this.logs[i].text;
            console.log(this.logs[i].text);
            const newWeekToPush = { 'id': 1, 'text': f.value.text };
            this.logs[i].text.push(newWeekToPush);
            this.updateLog = {
              _id: this.logs[i]._id,
              week: this.logs[i].week,
              type: type,
              text: this.logs[i].text,
              days: this.logs[i].days
            };
            console.log(2.1);
          }
          if (typeof (this.logs[i].text) === typeof(String()) ) {
            const newWeekArray = [{ 'id': 0, 'text': this.logs[i].text}];
            const newWeekToPush = { 'id': 1, 'text': f.value.text };
            newWeekArray.push(newWeekToPush);
            console.log(this.logs[i].text);
            this.updateLog = {
              _id: this.logs[i]._id,
              week: this.logs[i].week,
              type: type,
              text: newWeekArray,
              days: this.logs[i].days
            };
            console.log(2.2);
          }
          // console.log('Since week ' + week + ' already exist, we created array of week entries');
        }
        console.log(this.updateLog);
        this._logsService.updateLog(this.updateLog);
        // this.getAllLogs();
        this.showAlert('Log has been updated! ✏️');
        this.addLog.text = '';
        this.myForm.controls['text'].markAsUntouched();
        return;
      }
    }
    // If it is a new log and day is not filled
    if (f.value.day !== '') {
      this.newLog = {
        week: week,
        type: type,
        text: [],
        days: [{ 'day': f.value.day, 'text': f.value.text }]
      };
      console.log(3);
    } else {
      this.newLog = {
        week: week,
        type: type,
        text: f.value.text,
        days: []
      };
      console.log(4);
    }
    console.log(this.newLog);
    this._logsService.insertLog(this.newLog);
    this.getAllLogs();
    this.showAlert('Log has been added! 📃💪🎉');
    this.addLog.text = '';
    // this.addLog.day = '';
    this.myForm.controls['text'].markAsUntouched();
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      type: '',
      week: ['',  Validators.max(52)],
      day: '',
      text: ['', Validators.required]
    });
  }

}
