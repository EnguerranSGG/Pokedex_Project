import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { PokelistComponent } from './pokelist/pokelist.component';

import { Pokemon } from './models/pokemon';

import { PokemonService } from './services/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokelistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public PokemonData: Array<Pokemon> = [];

  public selectedPokemonIndex: number | null = null;

  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemonData();
  }

  async loadPokemonData() {
    const promises = [];
    for (let i = 1; i < 494; i++) {
      promises.push(this.PokemonService.getPokemonData(i));
    }

    this.PokemonData = await Promise.all(promises);

    console.log(this.PokemonData);
  }

  onFocus(index: number | null): void {
    this.selectedPokemonIndex = index;
  }

  trackByPokeIndex(index: number, pokemon: Pokemon): number {
    return pokemon.pokeIndex;
  }
}
