import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {RestapiComponent} from "./restapi/restapi.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'restapi', component: RestapiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
