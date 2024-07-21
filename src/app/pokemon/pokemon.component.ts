import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  @Input() pokemon!: any;

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/images/pixel_pokeball.png?raw=true';

  constructor(private router: Router) {}

  onFocusPokemon(roar : string) {
    const audio = new Audio(`${roar}`);
    audio.play();

    setTimeout(() => this.router.navigateByUrl(`/pokedex/${this.pokemon.pokeIndex}`), 1000);
    }

}
