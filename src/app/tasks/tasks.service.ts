import { DUMMY_TASKS } from '../dummy_tasks';
import { type Task } from './task/task.model';
import { type NewTask } from './new-task/new-task.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks:Array<Task> = DUMMY_TASKS;

  constructor() {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : DUMMY_TASKS;
  }

  getuserTasks(userId:string){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTask, userId:string){
    this.tasks.push({
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date
    });
    this.saveTasks();
  }

  removeTask(taskId: string){
    console.log('Removing task with id: ', taskId);
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
