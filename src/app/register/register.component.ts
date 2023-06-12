import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles =  ["Professor", "Student"];
registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  signup() {
    if (1) {
      const username = this.registerForm.get('username')?.value;
      const password = this.registerForm.get('password')?.value;
      const role = this.registerForm.get('role')?.value;
      const email = this.registerForm.get('email')?.value;
      // Prepare the payload with the username and password
      const payload = {
        username: username,
        password: password,
        role: role,
        email: email
      };

      this.http.post<string>('http://localhost:8080/register', payload)
        .subscribe(
          (response) => {
            console.log('Registration successful', response);
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Registration failed', error);
          }
        );
    }
  }
}
