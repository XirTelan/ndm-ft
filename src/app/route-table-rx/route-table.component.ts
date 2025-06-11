import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../constant';
import { BehaviorSubject, combineLatestWith, map, pipe } from 'rxjs';
import { compareRoutes } from '../../utils';
import { Route, SortBy } from '../types';

@Component({
  standalone: true,
  selector: 'route-table-rx',
  imports: [CommonModule],
  templateUrl: './route-table-rx.component.html',
  styleUrls: ['./route-table-rx.component.css'],
})
export class RouteTableRx {
  private routes$ = new BehaviorSubject<Route[]>(routes);
  private sortBy$ = new BehaviorSubject<SortBy>(null);
  private sortAsc$ = new BehaviorSubject<boolean>(true);

  readonly sortedRoutes$ = this.routes$.pipe(
    combineLatestWith(this.sortBy$, this.sortAsc$),
    map(([routes, sortBy, asc]) => {
      if (!sortBy) return routes;

      return routes.sort((a, b) =>
        asc ? compareRoutes(a, b, sortBy) : compareRoutes(b, a, sortBy)
      );
    })
  );

  toggleSort(column: NonNullable<SortBy>) {
    if (this.sortBy$.value === column) {
      this.sortAsc$.next(!this.sortAsc$.value);
    } else {
      this.sortBy$.next(column);
      this.sortAsc$.next(true);
    }
  }
}
