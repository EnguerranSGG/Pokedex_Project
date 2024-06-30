import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { PokeheaderComponent } from './pokeheader/pokeheader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokeheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
