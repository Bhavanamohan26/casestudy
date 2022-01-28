import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task.model';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-updatepriority',
  templateUrl: './updatepriority.component.html',
  styleUrls: ['./updatepriority.component.css']
})
export class UpdatepriorityComponent implements OnInit {
  tasks:any;
  taskId!:number;
  priority!:string;
  task!:Task;
 
  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }
    ngOnInit(): void {
    }
  
    updatePriority():void{
      this.taskService.updatePriority(this.taskId, this.priority).
      subscribe(data=>console.log(data), error=>console.log(error));
      this.task = new Task();
      this.gotoList();
    }
  
    onSubmit(){
      this.updatePriority();
    }
    gotoList() {
      this.router.navigate(['updateprio'])
     
    }
  
  }