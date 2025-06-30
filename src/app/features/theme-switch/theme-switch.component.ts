import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '@/app/services/theme/theme.service';

@Component({
  standalone: true,
  selector: 'app-theme-switch',
  templateUrl: 'theme-switch.component.html',
  imports: [MatButtonModule],
})
export class ThemeSwitch {
  themeService = inject(ThemeService);

  changeTheme() {
    this.themeService.toggleTheme();
  }
}
