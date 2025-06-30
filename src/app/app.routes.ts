import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.components';
import { NetworkMapComponent } from './pages/network-map/network-map.component';
import { Login } from './pages/login/login';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'network-map',
    component: NetworkMapComponent,
    data: { label: 'Network Map' },
  },
  {
    path: 'internet',
    data: { label: 'Internet' },
    loadComponent: () =>
      import('./pages/internet/internet.component').then((c) => c.InternetComponent),
  },
  {
    path: 'wireless',
    loadComponent: () =>
      import('./pages/wireless/wireless').then((c) => c.Wireless),
  },
  {
    path: 'advanced',
    data: { label: 'Advanced' },
    loadComponent: () =>
      import('./pages/advanced/advanced.component').then((c) => c.AdvancedComponent),
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
