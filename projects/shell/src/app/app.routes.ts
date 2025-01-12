import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    // {
    //     path: 'main',
    //     loadChildren: () =>
    //         loadRemoteModule({
    //             type: 'module',
    //             remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //             // rules, if expose routes, the name must be routes, if expose component, the name must be component
    //             exposedModule: './routes',
    //         }).then((m) => {
    //             console.log(m);
    //             return m.routes
    //         })
    // }
];