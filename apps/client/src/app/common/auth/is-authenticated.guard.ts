import {
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
} from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { inject } from '@angular/core';

export const isAuthenticatedGuard: CanActivateFn =
  (): MaybeAsync<GuardResult> => {
    const authService = inject(AuthorizationService);
    const router = inject(Router);
    if (authService.isLoggedIn) {
      return true;
    }

    router.navigate(['/login']);
    return false;
  };
