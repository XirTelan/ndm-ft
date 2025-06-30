import { Component, inject } from '@angular/core';
import { Router, RouterLink, Route } from '@angular/router';
import { ThemeSwitchComponent } from '../../features/theme-switch/theme-switch.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected routes: Route[] = [];
  router = inject(Router);

  constructor() {
    this.routes = this.router.config.filter(
      (route) => route.data && route.data['label']
    );
  }
}
