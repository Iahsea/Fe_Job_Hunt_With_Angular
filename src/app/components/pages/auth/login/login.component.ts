import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { LoginDTO } from '../../../../../dtos/auth/login.dto';
import { LoginResponse } from '../../../../responses/user/login.response';
import { UserResponse } from '../../../../responses/user/user.response';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true; // ẩn/hiện password
  loading = false;
  errorMessage: string | null = null;
  userResponse?: UserResponse;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    const loginData: LoginDTO = this.loginForm.value;

    this.authService.login(loginData).subscribe({
      next: (res: LoginResponse) => {
        debugger
        console.log('Login success:', res);
        this.userResponse = {
          ...res.data.user,
          avatarUrl: `${environment.imagesUrl}/avatars/${res.data.user.avatarUrl}`
        }
        // Lưu token vào localStorage nếu server trả về
        if (res.data.access_token) {
          this.authService.saveTokenToLocalStorage(res.data.access_token);
          this.authService.saveUser(this.userResponse);
        }
        this.router.navigate(['/']); // chuyển hướng về homepage
      },
      complete: () => {
        this.loading = false;
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage = err.error?.message || 'Đăng nhập thất bại';
        this.loading = false;
      }
    });
  }

  loginWithGoogle() {
    debugger
    window.location.href = `${environment.apiBaseUrl}/auth/google/login`;
  }

  loginWithFacebook() {
    window.location.href = `${environment.apiBaseUrl}/auth/facebook/login`;
  }


}
