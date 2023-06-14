import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  username=localStorage.getItem('username');

  constructor(private router: Router){}

  logout(){
  
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
