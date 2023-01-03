import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription} from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'task tracker';
  showAddTask: boolean;
  subscription: Subscription;

  // in order to use a service
  // we have to add it to the constuctor 
  // when the togglaAddTask is fierd in the service
  // to wach it we have to use the subsription here
  constructor(private uiService:UiService, private router: Router){
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value));
  }

  // we are callimg the function is the service
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  // useing Route to hide the button, when we're on the about page
  hasRoute(route: string) {
    return this.router.url === route;
  }

}
