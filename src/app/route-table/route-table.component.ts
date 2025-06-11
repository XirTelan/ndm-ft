import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../constant';
import {  compareRoutes } from '../../utils';
import { SortBy } from '../types';

@Component({
  standalone: true,
  selector: 'route-table',
  imports: [CommonModule],
  templateUrl: './route-table.component.html',
  styleUrls: ['./route-table.component.css'],
})
export class RouteTable {
  sortBy = signal<SortBy>(null);
  sortAsc = signal(true);

  readonly sortedRoutes = computed(() => {
    const sortBy = this.sortBy();
    const asc = this.sortAsc();
    const data = [...routes];
    if (!sortBy) return data;

    return data.sort((a, b) =>
      asc ? compareRoutes(a, b, sortBy) : compareRoutes(b, a, sortBy)
    );
  });

  toggleSort(column: NonNullable<SortBy>) {
    if (this.sortBy() === column) {
      this.sortAsc.update((v) => !v);
    } else {
      this.sortBy.set(column);
      this.sortAsc.set(true);
    }
  }
}
