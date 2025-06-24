import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isAuthenticated = false;

  if (!isAuthenticated) {
    return router.createUrlTree(['/login']);
  }

  return true;
};
