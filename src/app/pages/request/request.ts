import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './request.html'
})
export class Request {

  constructor(private router: Router) {}

  task: any = {
    title: '',
    location: '',
    price: ''
  };

  submitTask() {
    if (!this.task.title || !this.task.location || !this.task.price) {
      alert('Please fill all fields');
      return;
    }

    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    existingTasks.push(this.task);
    localStorage.setItem('tasks', JSON.stringify(existingTasks));

    alert('Task created!');

    this.router.navigate(['/dashboard']);
  }
}