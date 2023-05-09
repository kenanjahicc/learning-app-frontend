import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../services/message.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messaging-page',
  templateUrl: './messaging-page.component.html',
  styleUrls: ['./messaging-page.component.css']
})
export class MessagingPageComponent implements OnInit {
  messages: any[] = [];
  newMessage: any = { content: '', sender: '', receiver: '',id:null,time:null };

  constructor(private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messages = this.route.snapshot.data['messages'];
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.newMessage).subscribe(() => {
      this.newMessage.content = '';
     

    });
  }
}
