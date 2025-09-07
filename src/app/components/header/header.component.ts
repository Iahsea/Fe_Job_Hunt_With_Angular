import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environments';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public backendUrl = environment.imagesUrl;
  public isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.authService.getToken();
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      complete: () => {
        debugger
      },
      error: (err) => {
        console.error('Logout error:', err);
        // vẫn điều hướng về login hoặc xử lý lỗi tuỳ ý
        this.router.navigate(['/login']);
      }
    });
  }

}
