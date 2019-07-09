import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent
  ],

  exports: [
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent

  ]
})
export class LoginModule { }
