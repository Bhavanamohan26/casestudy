import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateTaskComponent} from './task/create-task/create-task.component';
import {TaskListComponent} from './task/task-list/task-list.component';
import { Login } from './login';
import { SearchstatusComponent } from './searchstatus/searchstatus.component';
import { UpdatepriorityComponent } from './updatepriority/updatepriority.component';
const routes: Routes = [
  
  
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'add', component:CreateTaskComponent},
  {path:'tasks', component:TaskListComponent},
  {path:'Login',component:Login},
  {path:'search',component:SearchstatusComponent},
  { path:'updatePriority', component:UpdatepriorityComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
