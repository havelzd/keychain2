import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

const dummyStorage: Storage = {
  length: 0,
  clear: (): void => {
    return;
  },
  getItem: () => null,
  key: () => null,
  removeItem: () => {
    return;
  },
  setItem: () => {
    return;
  },
};

export const AuthStorage = new InjectionToken<Storage>('authStorage');

export const authStorageFactory = (platform = inject(PLATFORM_ID)): Storage => {
  if (isPlatformServer(platform)) {
    return dummyStorage;
  }
  return localStorage;
};
