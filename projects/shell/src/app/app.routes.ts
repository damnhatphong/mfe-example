import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const Router_Configs: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     // redirectTo: 'main'
    // },
    // remote entry routes
    // {
    //     path: 'remote-app',
    //     loadComponent: () =>
    //         loadRemoteModule({
    //             type: 'module',
    //             remoteEntry: 'http://127.0.0.1:8080/remoteEntry.js',
    //             exposedModule: './Component',
    //         }).then((m) => m.HomeComponent)
    // },
    {
        path: 'main',
        loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://127.0.0.1:8080/remoteEntry.js',
                exposedModule: './routes',
            }).then((m) => {
                console.log(m);
                return m.routes
            })
    }
];