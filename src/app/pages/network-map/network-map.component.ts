import { Component } from '@angular/core';
import { UsageStatComponent } from '../../features/usage-stat/usage-stat.component';

@Component({
  standalone: true,
  selector: 'app-network-map',
  imports: [UsageStatComponent],
  templateUrl: './network-map.component.html',
})
export class NetworkMapComponent {}
