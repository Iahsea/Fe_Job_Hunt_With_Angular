import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDTO } from "../../../dtos/auth/login.dto";
import { environment } from "../../environments/environments";
import { LoginResponse } from "../../responses/user/login.response";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private TOKEN_KEY = 'token';
    private USER_KEY = 'user';

    constructor(private http: HttpClient) {
    }

    login(data: LoginDTO) {
        const url = `${environment.apiBaseUrl}/auth/login`;
        return this.http.post<LoginResponse>(url, data);
    }

    saveToken(token: string) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    removeToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    saveUser(user: any) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }

    getUser(): any {
        const user = localStorage.getItem(this.USER_KEY);
        return user ? JSON.parse(user) : null;
    }

    removeUser() {
        localStorage.removeItem(this.USER_KEY);
    }

    logout() {
        this.removeToken();
        this.removeUser();
    }
}
