export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}
export type SortBy = 'address' | 'gateway' | 'interface' | null;
