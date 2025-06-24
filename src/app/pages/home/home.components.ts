import { Component } from '@angular/core';

import { RouteTableRx } from '../../features/route-table-rx/route-table.component';
import { RouteTable } from '../../features/route-table/route-table.component';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouteTableRx, RouteTable],
})
export class HomePage {}
