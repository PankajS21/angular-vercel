import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  task = ""
  taskList: { id: number, task: string }[] = [];

  addTask(task: any) {
    this.taskList.push({ id: this.taskList.length + 1, task: task });
    this.task = ""
  }

  handleDelete(id: number) {
    this.taskList = this.taskList.filter((item) => item.id !== id)
  }
}
