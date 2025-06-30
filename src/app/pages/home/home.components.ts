import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  RouteTableComponent,
  RouteTableOldComponent,
  RouteTableRxComponent,
} from '@/app/features/route-tables';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    RouteTableRxComponent,
    RouteTableComponent,
    RouteTableOldComponent,
    MatTabsModule,
  ],
})
export class HomePage {}
