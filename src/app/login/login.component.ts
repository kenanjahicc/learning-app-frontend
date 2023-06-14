import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppModule } from '../app.module';
import { LoginResponse } from './login-response.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
loginForm!: FormGroup;


  constructor (private formBuilder: FormBuilder, private HTTP: HttpClient, private router: Router){}


  ngOnInit() {
  this.loginForm=this.formBuilder.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  });
  }


login(){
if (this.loginForm.valid){
const username= this.loginForm.get('username')?.value;
const password= this.loginForm.get('password')?.value;
const payload = {username: username, password: password};
this.HTTP.post<LoginResponse> ('https://teach-me.herokuapp.com/authenticate', payload)
.subscribe(
(response)=> {
  localStorage.setItem('token',response.token);
  localStorage.setItem('username', username);
  this.router.navigate(['/']);
},
(error) => {
  console.error('login failed',error);
}); }}


signUp(){
  this.router.navigate(['/register']);
}

}
