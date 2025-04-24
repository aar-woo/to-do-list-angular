import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskItemComponent } from './task-item.component';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  imports: [TaskItemComponent],
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {}
