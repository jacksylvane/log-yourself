import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  today = Date.now();
  log: {
    week: number,
    day: number,
    type: string,
    text: string,
  };
  logs: {}[];
  showConfirmDelete = false;
  logToDelete: number;

  constructor() { }

/* Submits a new log */
   onSubmitAddLog(f) {
    let type = 'work';
    type = f.value.personal ? 'personal' : 'work' ;
     this.log = {
       week: f.value.week, day: f.value.day , type: type, text : 'some text'};
    this.logs.unshift(this.log);
    console.log(this.logs);
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
initDelete(i) {
  this.showConfirmDelete = true;
  this.logToDelete = i;
}

/* Deletes log based on stored variable created by initDelete() */
  deleteLog() {
    this.logs.splice(this.logToDelete, 1);
    this.showConfirmDelete = false;
  }

  ngOnInit() {
    this.logs = [
      {
      week: '01',
      day: '07',
      type: 'personal',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur quod animi distinctio dicta molestiae nobis officiis repudiandae perferendis at!'
      },
      {
      week: '02',
      day: '04',
      type: 'personal',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur quod animi distinctio dicta in quis rem sint! Ipsum eaque deleniti quod vel dolorem molestiae nobis officiis repudiandae perferendis at!'
      },
      {
      week: '03',
      day: '05',
      type: 'work',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur quod animi distinctio dicta in quis rem sint! nobis officiis repudiandae perferendis at!'
      },
      {
      week: '04',
      day: '07',
      type: 'personal',
      text: 'true bro',
      },
  ];
    console.log(this.logs);
  }

}
