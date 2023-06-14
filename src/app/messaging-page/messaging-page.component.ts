import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-messaging-page',
  templateUrl: './messaging-page.component.html',
  styleUrls: ['./messaging-page.component.css']
})
export class MessagingPageComponent implements OnInit {
  messages: any[] = [];
  newMessage: any = { content: '', sender: '', receiver: '', id:null, time:null };
  usertwo:any;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void{
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    this.route.paramMap.subscribe((obs) => {
      this.usertwo=(obs.get('usertwo'));
      });
    this.http.get<any[]>('https://teach-me.herokuapp.com/messages/'+username+'/'+this.usertwo, options)
      .subscribe(
          (response) => {
            this.messages=response;
            for(let i=0;i<response.length;i++){
              this.messages[i].sender=response[i].sender;
              this.messages[i].reciever=response[i].receiver;
              this.messages[i].content=response[i].content;
              this.messages[i].time=response[i].time;
            }
          },
          (error) => {
            console.error('Error while getting messages', error);
          }
        );
  }

  sendMessage(): void{
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    const payload = {
      id: null,
      sender: localStorage.getItem('username'),
      receiver: this.usertwo,
      content: this.newMessage.content,
      time: new Date().toISOString()
    };
    
    this.http.post<any>('https://teach-me.herokuapp.com/messages', payload , options)
      .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.error('Error while getting messages', error);
          }
        );
  }
}