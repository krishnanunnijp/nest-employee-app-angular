import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  employeeCode=""
  taskName=""
  dueDate=""
  readValue= ()=>
  {
   let data :any =     {
    "employeeCode" : this.employeeCode,
    "taskName" : this.taskName,
    "dueDate" : this.dueDate
    
}
   console.log(data)
   this.api.addTask(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=='success'){
        alert("successfully added")
        this.employeeCode=""
        this.taskName=""
        this.dueDate=""
      }else{
        alert("something went wrong")
      }
    }
   )
  }
constructor(private api:ApiService){ }


}
