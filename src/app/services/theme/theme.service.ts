import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = this.loadTheme();

  constructor() {
    this.init();
  }

  get theme() {
    return this.currentTheme;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    this.saveTheme();
  }

  private loadTheme(): Theme {
    return (
      this.getStoredTheme() ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    );
  }

  init() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  private saveTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }

  private getStoredTheme(): Theme | null {
    const theme = localStorage.getItem('theme');
    return theme === 'light' || theme === 'dark' ? theme : null;
  }
}
