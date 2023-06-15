import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mymessages',
  templateUrl: './mymessages.component.html',
  styleUrls: ['./mymessages.component.css']
})
export class MyessagesComponent implements OnInit {
  messagedPeople?: any[];

  ///mymessages/{username}

constructor (private http:HttpClient, private router: Router){}
  ngOnInit(): void {
  
    const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
    
    
    this.http.get<any>('https://teach-me.herokuapp.com/mymessages/'+ username?.toString(),  options)
      .subscribe(
          (response) => {
            this.messagedPeople = response;
            console.log(this.messagedPeople);
          },
          (error) => {
            console.error('Error while getting messages', error);
          }
        );
  }

  redirectToMessaging(person: string) {
    this.router.navigate(['/messages/', person]);
  }
}