import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, JsonpClientBackend} from '@angular/common/http';
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiURL = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }

  getTask(): Observable <Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
  addTask(task: Task): Observable<Task>{
    // we need the httpOptions bc we submiting data
return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}
