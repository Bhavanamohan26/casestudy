import { Injectable } from '@angular/core';
import {ApiResponse} from 'src/app/model/api.response';
import {Task} from 'src/app/model/task.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  
  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:8090/createaddtask';
  baseUrl1:string='http://localhost:8090/restgetAlltask';

  getTasks():Observable<any>{
    return this.http.get<ApiResponse>(this.baseUrl1);
  }
  getTaskById(taskId:number):Observable<any>{
    return this.http.get(this.baseUrl+taskId);
  }
  createTask(task:Task):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl,task);
  }
  updateTask(id:number, task:Task):Observable<any>{
    return this.http.put<ApiResponse>(this.baseUrl+task.taskId,task);
  }
  deleteTask(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl1+id);
  }
  validate(userName: string,password:string): Observable<any> {

    return this.http.get(`http://localhost:8090/user/${userName}/${password}`);

  }
  searchByStatus(status:string): Observable<any> {

    return this.http.get(`http://localhost:8090/status/${status}`);
    
  
  }
  updatePriority(taskId:number,priority:string):Observable<Object>{
    return this.http.get(`http://localhost:8090/assignpriority/${taskId}/${priority}`);
  }
}
