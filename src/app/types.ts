export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}
export type SortBy = 'address' | 'gateway' | 'interface' | null;

export type SortableColumn = NonNullable<SortBy>;

export const SORTABLE_COLUMNS: SortableColumn[] = [
  'address',
  'gateway',
  'interface',
];
