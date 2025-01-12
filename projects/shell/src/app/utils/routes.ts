// projects/shell/src/app/utils/routes.ts

import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { Router_Configs } from '../app.routes';
import { CustomManifest } from './config';

export function buildRoutes(options: CustomManifest): Routes {

    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry = options[key];
        return {
            path: entry.routePath,
            loadChildren: () =>
                loadRemoteModule({
                    type: 'module',
                    remoteEntry: key,
                    exposedModule: './routes' //entry.exposedModule
                }).then(m => m.routes)
        }
    });

    return [...Router_Configs, ...lazyRoutes];
}