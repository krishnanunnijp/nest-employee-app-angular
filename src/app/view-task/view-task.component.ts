import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  data:any=[]

  constructor(private api:ApiService){
    this.api.viewTask().subscribe(
      (generatedValue)=>{
        this.data=generatedValue
      }
    )
  
  }
}
