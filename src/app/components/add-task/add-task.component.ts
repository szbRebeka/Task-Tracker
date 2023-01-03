import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit{
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();

text:string;
day: string;
reminder: boolean = false;
showAddTask: boolean;
subscription: Subscription;

// to respont to the click in the header comp here as well
// the showAddTask will be set here to a value as well
  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice.onToggle().subscribe(
      (value) => (this.showAddTask = value));
  }
  ngOnInit(): void {}

  onSubmit() {
    // we just state what we want to send to the
    // server trough our service here
    // we do the funtionalito in the parent comp. aka app-test
    //we emit the event here
    if(!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
//we are emitting the new task
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
