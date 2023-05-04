import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class MessageResolver implements Resolve<any[]> {
  constructor(private messageService: MessageService) { }

  resolve(): Observable<any[]> {
    return this.messageService.getMessages();
  }
}
