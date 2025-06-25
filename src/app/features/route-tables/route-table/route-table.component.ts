import { Component, signal, computed } from '@angular/core';
import { routes } from '../../../../constant';
import { SORTABLE_COLUMNS, SortBy } from '../../../types';
import { compareRoutes } from '@/src/utils';
import { TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'route-table',
  imports: [TitleCasePipe],
  templateUrl: './route-table.component.html',
})
export class RouteTable {
  readonly SORTABLE_COLUMNS = SORTABLE_COLUMNS;

  protected sortBy = signal<SortBy>(null);
  protected sortAsc = signal(true);

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
