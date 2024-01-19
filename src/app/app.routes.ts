import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Route[] =[
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    }
];
