import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'apps/client/src/environments/environment';
import { ApiRequest, ApiResponse, ApiResponseType } from '@keychain2/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly serverUrl = environment.serverUrl;

  post<A extends ApiResponse, R extends ApiRequest<A>>(
    endpoint: string,
    body: R,
  ): Observable<ApiResponseType<R>> {
    return this.http.post<ApiResponseType<R>>(this.getFullPath(endpoint), body);
  }

  private getFullPath(endpoint: string) {
    return `${this.serverUrl}${endpoint}`;
  }
}
