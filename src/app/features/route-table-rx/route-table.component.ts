import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../constant';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { compareRoutes } from '../../../utils';
import { SORTABLE_COLUMNS, SortBy } from '../../types';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'route-table-rx',
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './route-table-rx.component.html',
  styleUrls: ['./route-table-rx.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteTableRx {
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
