import { Route, SortBy } from './app/types';

export function compareIp(a: string, b: string): number {
  const toNumber = (ip: string) => ip.split('.').map(Number);
  const [a1, a2, a3, a4] = toNumber(a);
  const [b1, b2, b3, b4] = toNumber(b);
  return a1 - b1 || a2 - b2 || a3 - b3 || a4 - b4;
}

export function compareRoutes(
  a: Route,
  b: Route,
  sortBy: NonNullable<SortBy>
): number {
  if (sortBy === 'address' || sortBy === 'gateway') {
    return compareIp(a[sortBy], b[sortBy]);
  } else {
    return a[sortBy].localeCompare(b[sortBy]);
  }
}
