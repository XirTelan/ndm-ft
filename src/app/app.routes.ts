import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.components';
import { NetworkMap } from './pages/network-map/network-map.component';
import { isAuthGuard } from './is-auth-guard';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'network-map',
    component: NetworkMap,
    canActivate: [isAuthGuard],
  },
  {
    path: 'login',
    component: Login,
  },
];
