import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchstatus',
  templateUrl: './searchstatus.component.html',
  styleUrls: ['./searchstatus.component.css']
})
export class SearchstatusComponent implements OnInit {

  task:any;
  task_ID!:number;
  status !: string;
  
  constructor(private taskService:TaskService, private router:Router)  { }

  ngOnInit() {
    
      
  }

  statuscheck(){
  
    this.taskService.searchByStatus(this.status).subscribe(

      data => {

        this.task = data;

        console.log(this.task);

      },

      error => {

        console.log(error);

      });

    }

    searchStatus(id: number){
      this.router.navigate(['search']);
    }
  
}
