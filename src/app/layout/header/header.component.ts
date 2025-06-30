import { Component } from '@angular/core';
import { Router, RouterLink, Route } from '@angular/router';
import { ThemeSwitchComponent } from '../../features/theme-switch/theme-switch.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ThemeSwitch],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {
  protected routes: Route[] = [];

  constructor(private router: Router) {
    this.routes = this.router.config.filter(
      (route) => route.data && route.data['label']
    );
  }
}
