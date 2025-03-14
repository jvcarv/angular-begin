import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() select = new EventEmitter<string>();

  onCompleteTask(){
    this.select.emit(this.task.id);
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
