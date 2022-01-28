import { Component } from "@angular/core";

import { NgForm } from "@angular/forms";

import { Router } from "@angular/router";

import { TaskService } from "./service/task.service";

import {user} from './user'

@Component({

     selector:'template-form',

     templateUrl:'./Login.html'
     //styleUrls: ['./login.css']
})

     export class Login{

          User : user = new user();

          name !: string;

          password !:string;

          constructor(private router:Router,private taskservice : TaskService){}
          check(value:any)

{this.name = value.name;

     this.password = value.password;

     this.taskservice.validate(this.name,this.password).subscribe(data=>

          {
               console.log(data);
                    if(data==true)
                    {
                          this.gotopage();
                          //this.router.navigate(["/tasks"]);


                    }
                    if(data==false)
                         {
                              alert("Please enter Valid Credentials");
                         }

                    },(error: any)=>console.log(error));}

                    gotopage(){

                        this.router.navigate(["/tasks"]);}

                    }