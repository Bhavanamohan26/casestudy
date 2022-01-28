import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import {TaskService} from './service/task.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Login } from './login';
import { SearchstatusComponent } from './searchstatus/searchstatus.component';
import { UpdatepriorityComponent } from './updatepriority/updatepriority.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent,
    Login,
    SearchstatusComponent,
    UpdatepriorityComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
