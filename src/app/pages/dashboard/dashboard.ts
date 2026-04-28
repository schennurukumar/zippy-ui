import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html'
})
export class Dashboard {

  tasks = [
    { title: 'Tire Change', location: '1.2 miles away', price: 20 },
    { title: 'Moving Help', location: '0.8 miles away', price: 50 },
    { title: 'Jump Start', location: '2.5 miles away', price: 15 }
  ];

  acceptTask(task: any) {
  alert(`Accepted: ${task.title}`);

  // remove task from list
  this.tasks = this.tasks.filter(t => t !== task);
}
}