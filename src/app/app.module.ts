import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';
import { EmpTaskComponent } from './emp-task/emp-task.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component'

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },{
    path:"add",
    component:AddEmployeeComponent
  },{
    path:"employee",
    component:EmployeeLoginComponent
  },{
    path:"task",
    component:AddTaskComponent
  },{
    path:"view",
    component:ViewTaskComponent
  },{
    path:"empview",
    component:EmpTaskComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    EmployeeLoginComponent,
    AddTaskComponent,
    ViewTaskComponent,
    EmpNavbarComponent,
    EmpTaskComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
