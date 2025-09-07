import { Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CompanyDetail } from './components/pages/company-detail/company-detail';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { DefaultLayout } from './components/layouts/default-layout/default-layout';
import { AuthLayout } from './components/layouts/auth-layout/auth-layout';
import { LoginSuccessComponent } from './components/pages/auth/login-success/login-success.component';

export const routes: Routes = [
    // Layout mặc định: CÓ header + footer
    {
        path: '',
        component: DefaultLayout,
        children: [
            { path: '', component: HomepageComponent },
            { path: 'company/:id', component: CompanyDetail },
            // có thể thêm các trang khác vào đây
        ]
    },

    // Layout auth: KHÔNG header + footer
    {
        path: '',
        component: AuthLayout,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'login-success', component: LoginSuccessComponent },
        ]
    },
];
