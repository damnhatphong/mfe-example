import { Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ModulesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadComponent: () => import('./home-page/pages/home/home.component').then(cmp => cmp.HomeComponent)
            }
        ]
    }
]