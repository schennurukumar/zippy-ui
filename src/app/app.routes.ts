import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Request } from './pages/request/request';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'request', component: Request }
];