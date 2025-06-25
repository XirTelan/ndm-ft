import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theme-switch',
  templateUrl: 'theme-switch.component.html',
  imports: [MatButtonModule],
})
export class ThemeSwitch implements OnInit {
  theme: 'light' | 'dark' = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';

  constructor() {}

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
  }
}
