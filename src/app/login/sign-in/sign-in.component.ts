import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    public authService: AuthService  ) {

  }

  ngOnInit() {
  }

  login() {
    console.log('coming')
    console.log(this.loginForm.value.email);
    this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password);
  }
}
