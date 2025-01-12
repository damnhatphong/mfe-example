import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-app-modules',
  imports: [RouterOutlet],
  template: `<h2>main-app ModulesComponent works!</h2>
  <router-outlet />`,
  styleUrl: './modules.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulesComponent {
  title = 'main-app';
}
