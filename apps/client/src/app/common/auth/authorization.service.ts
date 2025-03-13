import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { LoginRequest, RegisterUserRequest } from '@keychain2/api';
import { AuthStorage } from './auth.storage';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly apiService = inject(ApiService);
  private readonly authStorage = inject(AuthStorage);
  private _user = null;

  private _isLoggedIn = false;
  get isLoggedIn() {
    return this._isLoggedIn;
  }

  constructor() {
    this._isLoggedIn = !!this.authStorage.getItem('token');
  }

  register(request: RegisterUserRequest) {
    return this.apiService.post('api/v1/auth/register', request);
  }

  login(request: LoginRequest): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/v1/auth/login', request).subscribe({
        next: (response) => {
          const token = response.accessToken;
          this.authStorage.setItem('token', token);
          this._isLoggedIn = true;
          resolve(true);
        },
        error: () => {
          reject(false);
        },
      });
    });
  }
}
