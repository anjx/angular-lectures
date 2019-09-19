import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-example',
  templateUrl: './tasks-example.component.html',
  styleUrls: ['./tasks-example.component.scss']
})
export class TasksExampleComponent {
  public tasks: any[] = [
    { name: 'Completed task', status: 'completed' },
    { name: 'Started task', status: 'started' },
    { name: 'New task', status: 'new' },
    { name: 'Started task', status: 'started' },
    { name: 'Completed task', status: 'completed' }
  ];

  public status = '';

  public toggle(started: boolean) {
    this.status = started ? 'started' : '';
  }
}
