import { ApiRequest, ApiResponse } from '../request';

export type RegisterUserResponse = ApiResponse & {
  result: boolean;
};

export type RegisterUserRequest = ApiRequest<RegisterUserResponse> & {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type LoginResponse = ApiResponse & {
  accessToken: string;
};

export type LoginRequest = ApiRequest<LoginResponse> & {
  email: string;
  password: string;
};
