import { Component, inject } from '@angular/core';
import { PokemonService } from '../services/data';
import { FormsModule } from '@angular/forms';

import { Pokemon } from '../models/pokemon';

import { PokemonComponent } from '../pokemon/pokemon.component';

import { PokelistComponent } from '../pokelist/pokelist.component';

@Component({
  selector: 'app-pokefilter',
  standalone: true,
  imports: [FormsModule, PokemonComponent, PokelistComponent],
  templateUrl: './pokefilter.component.html',
  styleUrls: ['../poke-filter/pokefilter.component.scss']
})

export class PokeFilterComponent {

  filteredPokemons: Array<Pokemon> = [];
  selectedPokemonType1: string = '';
  selectedPokemonType2: string | null = null;
  selectedPokemonIndex: number | null = null;
  public hasSearch: boolean = false;

  private pokemonService = inject(PokemonService);

  constructor() {}

  async ngOnInit() {
    /*this.pokemonService.getPokemonData().subscribe(pokemons => {
      this.filteredPokemons = pokemons;
      this.sortPokemons();
    });*/
  }

  async onSearch(pokemonType1: string, pokemonType2: string | null) {
    this.selectedPokemonType1 = pokemonType1;
    this.selectedPokemonType2 = pokemonType2;
    /*this.filteredPokemons = await this.pokemonService.getPokemonByTypes(this.selectedPokemonType1, this.selectedPokemonType2);*/

    this.sortPokemons();
  }

  onFocus(index: number | null): void {
    this.selectedPokemonIndex = index;
  }

  trackByPokeIndex(index: number, pokemon: Pokemon): number {
    return pokemon.pokeIndex;
  }

  private sortPokemons(): void {
    this.filteredPokemons.sort((a, b) => a.pokeIndex - b.pokeIndex);
  }
}

