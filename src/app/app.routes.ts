import { Routes } from '@angular/router';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { CompanyDetail } from './components/pages/company-detail/company-detail';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'company/:id', component: CompanyDetail }
];
