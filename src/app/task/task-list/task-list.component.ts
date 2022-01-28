
import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from 'src/app/service/task.service';
import {Task} from 'src/app/model/task.model';
import {Observable} from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Observable<any>;
  constructor(private taskService:TaskService, private router:Router) { }

  ngOnInit(): void {
    this.tasks=this.taskService.getTasks();
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(
        data => {
          console.log(data);
          this.tasks = this.taskService.getTasks();
        },
        error => console.log(error));
  }

  updateTask(id: number){
    this.router.navigate(['update', id]);
  }



}
