import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { UserResponse } from '../../../../responses/user/user.response';

@Component({
    selector: 'app-login-success',
    template: `<p>Đang xử lý đăng nhập...</p>`
})
export class LoginSuccessComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const token = params['token'];
            if (token) {
                this.authService.saveTokenToLocalStorage(token);

                // Gọi API /me để lấy thông tin user
                this.authService.getAccount().subscribe({
                    next: (user: any) => {
                        debugger
                        this.authService.saveUser(user.data.user);
                        this.router.navigate(['/']); // về homepage
                    },
                    complete: () => {
                        debugger
                    },
                    error: (err) => {
                        console.error('Lỗi lấy profile:', err);
                        this.router.navigate(['/login']);
                    }
                });
            } else {
                debugger
                this.router.navigate(['/login']); // không có token => fail
            }
        });
    }
}
