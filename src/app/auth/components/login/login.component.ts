import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordValidRegEx: string =
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router : Router
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.passwordValidRegEx),
        ]),
      ],
    });
    
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  login() {
   this.authService.login().subscribe((response) => {
   
    const user = response.find((currentUser: any) => {
      return currentUser.email === this.loginForm.value.username && currentUser.password === this.loginForm.value.password;
    });

    if (user) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Sucessful !',
        showConfirmButton: false,
        timer: 3000
      })
      this.loginForm.reset();
      localStorage.setItem('sessionUser', "currentUserData");
      this.router.navigate(['']);

    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'User Not Found',
        showConfirmButton: false,
        timer: 3000
       
      })
    }
  });
  }
}
