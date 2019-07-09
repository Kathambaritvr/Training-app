import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { LoginModule } from '../login/login.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CommonMaterialModule,
    LoginModule
   // BrowserAnimationsModule,
  ],
  providers: []
})
export class HomeModule { }
