import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEnp=(value:any)=>{
    return this.http.post("http://localhost:8080/add",value)
  }
  getPassword=(value:any)=>{
    return this.http.post("http://localhost:8080/login",value)
  }
  addTask=(value:any)=>{
    return this.http.post("http://localhost:8080/",value)
  }
  viewTask=()=>{
    return this.http.get("http://localhost:8080/tasks")
  }
  viewEmpTask=(value:any)=>{
    return this.http.post("http://localhost:8080/viewEmp",value)
  }
  updateTask=(value:any)=>{
    return this.http.post("http://localhost:8080/update",value)
  }
}
