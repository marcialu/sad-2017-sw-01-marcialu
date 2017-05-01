import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [TaskService]
})
export class AppComponent {
  title = 'app works!';
}
