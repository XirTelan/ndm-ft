import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './layout/header/header.component';
import { Footer } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Footer, RouterOutlet],
})
export class App {
  protected title = 'ndm-ft';
}
