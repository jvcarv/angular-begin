import { Component, Input, Output } from '@angular/core';
import {TaskComponent} from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './new-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) id!: string;
    @Input({required: true}) name!: string;
    isAddingTask = false;

    constructor(private taskService: TaskService){}

    get selectedUserTasks(){
      return this.taskService.getuserTasks(this.id);
    }

    onStartAddTask(){
      this.isAddingTask = true;
    }

    onCancelAddTask(){
      this.isAddingTask = false;
    }
}
