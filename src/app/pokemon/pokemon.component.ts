import { Component, Input } from '@angular/core';

import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  @Input() pokemon!: Pokemon;

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/pixel_pokeball.png?raw=true';

}
