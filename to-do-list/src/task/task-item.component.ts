import { Component, Input } from '@angular/core';

interface Task {
  id: number;
  title: string;
}
@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
}
