import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  private taskService = inject(TaskService);

  onCompleteTask(id: string){
    console.log('Completing task with id: ', id);
    this.taskService.removeTask(id);
  }

  get taskId(){
    return this.task.id;
  }

  get taskName(){
    return this.task.title;
  }
  get taskSummary(){
    return this.task.summary;
  }
  get taskDate(){
    return this.task.dueDate;
  }
}
