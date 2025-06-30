import { Component, computed, input } from '@angular/core';
import { StatGraphComponent } from '../../shared/ui/stat-graph/stat-graph.component';

const DEFAULT_PROPS = {
  width: 300,
  height: 150,
  offset: 10,
  color: '',
} satisfies Required<UsageStatOptions>;

export interface UsageStatOptions {
  width?: number;
  height?: number;
  color?: string | number;
  offset?: number;
}

@Component({
  selector: 'app-usage-stat',
  standalone: true,
  imports: [StatGraphComponent],
  templateUrl: 'usage-stat.component.html',
})
export class UsageStatComponent {
  canvasOptions = input<UsageStatOptions>();
  usageData = input.required<number[]>();
  options = computed(() => ({
    ...DEFAULT_PROPS,
    ...this.canvasOptions(),
  }));

  protected calcPoints() {
    this.usageData().map((point) => ({
      x: this.options().height - point,
    }));

    return [
      {
        x: 0,
        y: 10,
      },
      {
        x: 20,
        y: 100,
      },
    ];
  }
}
