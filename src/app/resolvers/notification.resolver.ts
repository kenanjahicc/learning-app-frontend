import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Notification} from '../models/notification.model';
import {NotificationService} from '../services/notification.service';

@Injectable()
export class NotificationResolver implements Resolve<Observable<Notification[]>> {
  constructor(private notificationService: NotificationService) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Notification[]> {
        return this.notificationService.getNotifications();
      }
}
