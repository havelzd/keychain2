import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthorizationService } from '../../common/auth/authorization.service';
import { RegisterUserRequest } from '@keychain2/api';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthorizationService);

  protected error = signal('');

  protected loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  protected register() {
    if (!this.loginForm.valid) {
      return;
    }
    const data = this.loginForm.value as RegisterUserRequest;
    this.authService.register(data).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.error.set(error.error.message);
      },
    });
  }
}
