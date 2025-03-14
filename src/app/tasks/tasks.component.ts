import { Component, Input, Output } from '@angular/core';
import {TaskComponent} from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS } from '../dummy_tasks';
import { type Task } from './task/task.model';
import { type NewTask } from './new-task/new-task.model';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) id!: string;
    @Input({required: true}) name!: string;
    tasks:Array<Task> = DUMMY_TASKS;
    isAddingTask = false;

    get selectedUserTasks(){
      return this.tasks.filter((task )=> task.userId === this.id);
    }

    onCompleteTask(id: string){
      console.log("hehe");
      this.tasks = this.tasks.filter(task => task.id !== id);
    }

    onStartAddTask(){
      this.isAddingTask = true;
    }

    onCancelAddTask(){
      this.isAddingTask = false;
    }

    onAddTask(task: NewTask){
      this.tasks.push({
        id: Math.random().toString(),
        userId: this.id,
        title: task.title,
        summary: task.summary,
        dueDate: task.date
      });
      this.isAddingTask = false;
    }
}
