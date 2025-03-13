import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../../common/logo/logo.component';
import { AuthorizationService } from '../../common/auth/authorization.service';
import { LoginRequest } from '@keychain2/api';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthorizationService);
  private readonly router = inject(Router);

  protected error = signal('');
  protected loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  protected login() {
    if (!this.loginForm.valid) {
      return;
    }
    const data = this.loginForm.value as LoginRequest;
    this.authService
      .login(data)
      .then(() => this.router.navigate(['/']))
      .catch((error) => this.error.set(error));
  }
}
