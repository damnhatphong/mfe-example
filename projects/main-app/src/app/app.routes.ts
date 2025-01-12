import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./modules/modules.routes').then(r => r.routes)
    }
];
