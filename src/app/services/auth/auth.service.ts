import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDTO } from "../../../dtos/auth/login.dto";
import { environment } from "../../environments/environments";
import { LoginResponse } from "../../responses/user/login.response";
import { UserResponse } from "../../responses/user/user.response";
import { tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private TOKEN_KEY = 'access_token';
    private USER_KEY = 'user';

    constructor(private http: HttpClient) {
    }

    login(data: LoginDTO) {
        const url = `${environment.apiBaseUrl}/auth/login`;
        return this.http.post<LoginResponse>(url, data, {
            withCredentials: true
        });
    }

    saveTokenToLocalStorage(token: string) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    removeTokenFromLocalStorage() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    getAccount() {
        const url = `${environment.apiBaseUrl}/auth/account`;
        return this.http.get<UserResponse>(url);
    }

    saveUser(user: any) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }

    getUserResponseFromLocalStorage(): UserResponse | null {
        const user = localStorage.getItem(this.USER_KEY);
        return user ? JSON.parse(user) : null;
    }

    removeUserFromLocalStorage() {
        localStorage.removeItem(this.USER_KEY);
    }

    logout() {
        const url = `${environment.apiBaseUrl}/auth/logout`;
        return this.http.post(url, {}, {
            withCredentials: true
        }).pipe(
            // khi logout thành công thì xoá token + user ở local
            tap(() => {
                this.removeTokenFromLocalStorage();
                this.removeUserFromLocalStorage();
            })
        );
    }
}
