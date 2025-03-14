import { Component, Input, Output, EventEmitter, input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model'
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) id!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TaskService);

  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.id);
    this.close.emit();
  }
}
