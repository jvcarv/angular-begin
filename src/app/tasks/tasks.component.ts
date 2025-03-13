import { Component, Input, Output } from '@angular/core';

interface User{
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) name!: string;

    get tasks(){
      return this.name;
    }
}
