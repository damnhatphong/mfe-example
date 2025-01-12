import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Router, Routes } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { lastValueFrom } from 'rxjs';
import { ManifestConfig, MfeRoutingService } from './services/mfe-routing.service';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { provideHttpClient } from '@angular/common/http';


export function buildRoutes(options: ManifestConfig[]): Routes {
  const lazyRoutes: Routes = options.map(entry => {
    return {
      path: entry.path,
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: entry.remoteEntry,
          exposedModule: entry.moduleType
        }).then(m => m.routes)
    }
  });

  return [...APP_ROUTES, ...lazyRoutes];
}


// Dynamic routing in Angular, there are some applications and usecases that will benefit from dynamic, configurable routes in Angular
// for examples a news application, CMS applications that will add marketing pages regularly, you want to build a solution that
// lessen the administrative efforts and make it easier to add new page, so you would like to construct the angular route at runtime
// This is also a new paradigm of programming, use a lot in automation process and workflows, called Configuration Oriented Programming (COP).

export const appConfig: ApplicationConfig = {
  providers: [provideAppInitializer(async () => {
    const mfeRoutingService = inject(MfeRoutingService);
    const router = inject(Router);
    const manifest = await lastValueFrom(mfeRoutingService.getManifestRouteConfig());
    console.log('manifest', manifest);
    // Hint: Move this to an APP_INITIALIZER 
    //  to avoid issues with deep linking
    const routes = buildRoutes(manifest);
    console.log('routes after mapping', routes);
    router.resetConfig(routes);

    // this.remotes = Object.values(manifest);
  }),
  provideHttpClient(),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(APP_ROUTES)]
};
