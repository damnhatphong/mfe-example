import { Paths } from './../../../../../node_modules/tsconfig-paths/lib/mapping-entry.d';
import { Routes } from "@angular/router";

export const DashboardRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'home',
        loadComponent: () => import('./dashboard/pages/home/home.component').then(cmp => cmp.HomeComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component').then(cmp => cmp.DashboardComponent)
    }
]