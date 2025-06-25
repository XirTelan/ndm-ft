import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: 'theme-switch.component.html',
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
