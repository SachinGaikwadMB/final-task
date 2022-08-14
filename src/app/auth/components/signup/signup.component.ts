import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpDto } from 'src/app/commons/sign-up-dto';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  passwordValidRegEx: string =
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';

  signUpDto: SignUpDto = new SignUpDto();

  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService,
    private router : Router
    ) {}

  ngOnInit(): void {
   
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.passwordValidRegEx),
        ]),
      ],
    });
  }

  get signUpFormControls() {
    return this.signUpForm.controls;
  }

  signUp(formValue: any) {
    //setting up the data in the Dto
    this.signUpDto.firstName = formValue.firstName;
    this.signUpDto.lastName = formValue.lastName;
    this.signUpDto.email = formValue.email;
    this.signUpDto.password = formValue.password;

    //save user
    this.apiService.saveUser(this.signUpDto).subscribe();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'New User Register Successfully !',
      showConfirmButton: false,
      timer: 3000
    })
    this.signUpForm.reset();
    this.router.navigate(["/"]);
  
  }
}
