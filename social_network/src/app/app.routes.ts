import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { RegisterComponent } from './features/register/register.component';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {
        path: '',
        component: LayoutComponent,
        children:[
            { path: '', component: HomePageComponent},
            { path: 'profile', component: ProfileComponent},
        ]
    }
];
