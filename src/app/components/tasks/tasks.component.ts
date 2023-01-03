import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
tasks: Task[] = [];

constructor(private taskService: TaskService){}

ngOnInit(): void {
  this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
}

deleteTask(task: Task) {
  this.taskService
  .deleteTask(task)
  .subscribe(() => 
  (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
}
toggleReminder(task: Task) {
  task.reminder = !task.reminder;
  this.taskService.updateTaskReminder(task).subscribe();
}
/**
 * we do the interaction with ther server in the service
 * and just subscribeing here
 */
addTask(task: Task){
  this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
}

}
