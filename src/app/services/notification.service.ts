import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class NotificationService {
  notification = { 'content' : '', 'show' : false};
  constructor() {
   }

  getNotification() {
    const alert = Observable.of(this.notification);
    return alert;
  }
  showNotification(content) {
    this.notification.content = content;
    this.notification.show = true;
    setTimeout(() => this.notification.show = false , 5000);
  }
}
