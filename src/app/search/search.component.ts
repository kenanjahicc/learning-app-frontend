import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

interface professorInterface{
  id:string,
  fullName:string,
  rating: number,
  course:string,
  hobby:string,
  experience:string,
  degree:string,
  email:string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  
    searchQuery: string = '';
    searchResults: professorInterface[]= []; 
  
    constructor(private http: HttpClient, private router: Router) {}
  
    search() {
      const token=localStorage.getItem('token');
    const username=localStorage.getItem('username');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
      const url = `https://teach-me.herokuapp.com/search/`;
      this.http.get<professorInterface[]>(url+this.searchQuery, options).subscribe(
        (response) => {
          this.searchResults = response; 
        },
        (error) => {
          console.error('Error occurred while searching professors:', error);
          this.searchResults = [];
        }
      );
    }
  
    navigateToMessaging(username: string) {
      this.router.navigate(['/messages', username]);
    }

}
