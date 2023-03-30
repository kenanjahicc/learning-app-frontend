import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {Route} from '../../../constants/route.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public toolbarButtons = [
    {
      text: 'Home',
      route: Route.EMPTY,
    },
    {
      text: 'About us',
      route: Route.ABOUT,
    },
    {
      text: 'Contact',
      route: Route.CONTACT,
    },
  ];

  public selectedRoute:any;

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.selectedRoute = ((event as NavigationEnd).url)?.substring(1);
    });
  }

  public navigateTo(route:string):void {
    this.router.navigate([
      route,
    ]);
  }
}
