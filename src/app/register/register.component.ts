import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { 'passwordsNotMatch': true };
  }

  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles = ["Professor", "Student"];
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    }, { validators: passwordValidator });
  }

  signup() {
    if (this.registerForm.valid) {
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

      this.http.post<string>('https://teach-me.herokuapp.com/register', payload)
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


