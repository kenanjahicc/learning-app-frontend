import { Component } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {

  sender : any;
  receiver: any;
  content: any;

  constructor() {

    }

}
