import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest, RegisterUserRequest } from './auth.types';

@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('register')
  async register(@Body() body: RegisterUserRequest) {
    return this.authService.register(
      body.email,
      body.firstName,
      body.lastName,
      body.password,
    );
  }

  @Post('login')
  async login(@Body() body: LoginRequest) {
    return this.authService.login(body.email, body.password);
  }
}
