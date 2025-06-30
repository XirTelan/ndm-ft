import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SORTABLE_COLUMNS, SortBy } from '@/app/types';
import { routes } from '@/constant';
import { compareRoutes } from '@/utils';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-route-table-rx',
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './route-table-rx.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTableRxComponent {
  protected sortBy$ = new BehaviorSubject<SortBy>(null);
  protected sortAsc$ = new BehaviorSubject<boolean>(true);

  readonly sortedRoutes$ = combineLatest([this.sortBy$, this.sortAsc$]).pipe(
    map(([sortBy, asc]) => {
      if (!sortBy) return [...routes];

      return [...routes].sort((a, b) =>
        asc ? compareRoutes(a, b, sortBy) : compareRoutes(b, a, sortBy)
      );
    })
  );
  readonly SORTABLE_COLUMNS = SORTABLE_COLUMNS;

  toggleSort(column: NonNullable<SortBy>) {
    if (this.sortBy$.value === column) {
      this.sortAsc$.next(!this.sortAsc$.value);
    } else {
      this.sortBy$.next(column);
      this.sortAsc$.next(true);
    }
  }
}
