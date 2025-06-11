import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteTable } from './route-table/route-table.component';
import { RouteTableRx } from './route-table-rx/route-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouteTable, RouteTableRx],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ndm-ft';
}
