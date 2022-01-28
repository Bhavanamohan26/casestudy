import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from 'src/app/service/task.service';
import {Task} from 'src/app/model/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  //initializinf task and hidden submit button
  task: Task= new Task();
  submitted=false;

  constructor(private taskService:TaskService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    this.taskService.createTask(this.task).subscribe(
      data=>console.log(data),error=>console.log(error));
    this.task=new Task();
    this.router.navigate(['/tasks']);

  }

}
