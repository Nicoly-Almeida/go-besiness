import { Routes } from '@angular/router';
import { LoginTemplateComponent } from './pages/auth/login-template/login-template.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginTemplateComponent,
        title: 'Login'
    },
    {
        path: 'request-password',
        component: LoginTemplateComponent,
        title: 'Request Password'
    }
];
