import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],   // ✅ ADD THIS
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}