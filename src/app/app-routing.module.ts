import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  { path: 'home' , loadChildren: './home/home.module#HomeModule'},
  { path:'topics/subjects/:id', loadChildren: './topic/topic.module#TopicModule' },
  { path: 'login' , loadChildren: './login/login.module#LoginModule' },
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes), 
    HomeModule,
    LoginModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
