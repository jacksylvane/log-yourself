import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { easeInOut } from '../../animations';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass'],
  animations: [easeInOut]
})
export class NotificationsComponent implements OnInit {

  alert = { 'content': '', 'show': true };

  constructor(private _notificationService: NotificationService) { }

  ngOnInit() {
    this._notificationService.getNotification()
      .subscribe((res) => {
        this.alert = res;
      });
  }

}
