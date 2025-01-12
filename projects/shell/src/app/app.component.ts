import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MfeRoutingService } from './services/mfe-routing.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shell';
}

