import { Component, signal } from '@angular/core';
import { TaskItemComponent } from './task-item.component';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  imports: [TaskItemComponent, CommonModule],
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks = signal<Task[]>([]);

  addTaskItem() {
    this.tasks.update((tasks) => [
      ...tasks,
      { id: tasks.length + 1, title: 'New Task' },
    ]);
    console.log('tasks: ', this.tasks());
  }
}
