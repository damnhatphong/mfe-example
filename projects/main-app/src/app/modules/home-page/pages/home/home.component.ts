import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'main-app-home',
  imports: [],
  template: `<p>home works!</p>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
