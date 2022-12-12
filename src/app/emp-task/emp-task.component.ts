import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-task',
  templateUrl: './emp-task.component.html',
  styleUrls: ['./emp-task.component.css']
})
export class EmpTaskComponent {
  taskStatus=""
  data:any=[]
constructor(private api:ApiService){
  let emp=localStorage.getItem("empinfo")
  console.log(emp)
  let data1=    {
    "employeeCode" : emp 
}
api.viewEmpTask(data1).subscribe(
  (generated:any)=>{
    this.data=generated
  }
)

}

update=(value:any)=>{
  let data1:any={
    "id": value,
    "taskStatus": this.taskStatus
}
this.api.updateTask(data1).subscribe(
  (generated:any)=>{
    console.log(generated)
    if(generated.status=="success"){
      window.location.reload()
    }
  }
)
}
}
