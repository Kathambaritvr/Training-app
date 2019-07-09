import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signUp(){
    this.authService.SignUp(this.signUpForm.value.email, this.signUpForm.value.password);
  }
}
