import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SORTABLE_COLUMNS, SortBy } from '@/app/types';
import { routes } from '@/constant';
import { compareRoutes } from '@/utils';
import { TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-route-table-old',
  imports: [TitleCasePipe],
  templateUrl: './route-table-old.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTableOldComponent {
  protected sortBy: SortBy = null;
  protected sortAsc = true;
  readonly SORTABLE_COLUMNS = SORTABLE_COLUMNS;

  get sortedRoutes() {
    if (!this.sortBy) return [...routes];

    return [...routes].sort((a, b) =>
      this.sortAsc
        ? compareRoutes(a, b, this.sortBy!)
        : compareRoutes(b, a, this.sortBy!)
    );
  }

  toggleSort(column: NonNullable<SortBy>) {
    if (this.sortBy === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortBy = column;
      this.sortAsc = true;
    }
  }
}
