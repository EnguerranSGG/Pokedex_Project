import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { PokelistComponent } from './pokelist/pokelist.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokelistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokédex';
}
