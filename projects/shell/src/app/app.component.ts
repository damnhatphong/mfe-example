import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shell';

  // private router = inject(Router);
  // private remotes: CustomRemoteConfig[] = [];
  // private getManifest

  // async ngOnInit(): Promise<void> {
  //   // const manifest = getManifest<CustomManifest>();

  //   // // Hint: Move this to an APP_INITIALIZER 
  //   // //  to avoid issues with deep linking
  //   // const routes = buildRoutes(manifest);
  //   // this.router.resetConfig(routes);

  //   // this.remotes = Object.values(manifest);
  // }
}

