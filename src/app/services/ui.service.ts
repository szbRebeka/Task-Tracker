/* 
RESPONT TO SPECIFIC EVENT IT MULIPLE COMPONENTS IN DIFFERENT WASY
This UI Service will handle the toggle
When we click the Add bnt on the form it should switch on/off the add-task component
When it is off the btn should be red and closed
Since thins are happening in multiple components, we have need
this UI service with the property showAddTask{boolean}
and we're setting up a subject, which is a certain type of Observable
We need a subjet, when we click the Add btn, and
track it in the task-item, and the header!
*/

import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // we call this when we click the Add btn
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // and where we want to smth when the click happens
  // we have to subsrice to this func
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
