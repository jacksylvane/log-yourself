
import {of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class NotificationService {
  notification = { 'content' : '', 'show' : false};
  constructor() {
   }

  getNotification() {
    const alert = observableOf(this.notification);
    return alert;
  }
  showNotification(content) {
    this.notification.content = content;
    this.notification.show = true;
    setTimeout(() => this.notification.show = false , 5000);
  }
}
