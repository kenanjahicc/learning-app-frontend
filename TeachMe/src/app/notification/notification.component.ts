import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from '../models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{

  notifications: Notification[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.notifications = data.notifications;
    });
  }
}
