import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger
        const token = localStorage.getItem('access_token');

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    // Token hết hạn hoặc không hợp lệ
                    localStorage.removeItem('access_token'); // clear token
                    this.router.navigate(['/login']); // hoặc redirect sang logout page
                }
                return throwError(() => err);
            })
        );
    }
}
