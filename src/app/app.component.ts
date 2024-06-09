import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PalestrantesComponent } from './pages/palestrantes/palestrantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventosComponent, PalestrantesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WebApplicationFront';
}
