import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface ManifestConfig {
  name: string;
  path: string;
  remoteEntry: string;
  remoteType: "module" | "manifest"
  moduleType: "./routes" | "./component"
}

@Injectable({
  providedIn: 'root'
})
export class MfeRoutingService {
  http = inject(HttpClient);
  constructor() { }

  getManifestRouteConfig(): Observable<ManifestConfig[]> {
    return this.http.get<ManifestConfig[]>("http://localhost:3000/manifest").pipe(tap(data => console.log('manifest configs: ', data)))
  }
}
