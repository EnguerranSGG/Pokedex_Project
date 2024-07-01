import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../models/pokemon';

import { NgFor, CommonModule, NgClass } from '@angular/common';

import { PokemonService } from '../services/data';

import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [NgFor, CommonModule, NgClass, PokemonComponent],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})


export class PokelistComponent implements OnInit {

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/pixel_pokeball.png?raw=true';

  public selectedPokemonIndex: number | null = null;

  pokemons!: Array<Pokemon>;

  constructor(private PokemonService: PokemonService) {}

  async ngOnInit() {

    await this.PokemonService.loadPokemonData();
    this.pokemons = this.PokemonService.getPokemons();

    this.sortPokemons();
  }

  onFocus(index: number | null): void {
    this.selectedPokemonIndex = index;
  }

  trackByPokeIndex(index: number, pokemon: Pokemon): number {
    return pokemon.pokeIndex;
  }

  private sortPokemons(): void {
    this.pokemons.sort((a, b) => a.pokeIndex - b.pokeIndex);
  }

  /* Cette function utilise la méthode sort afin de s'assurer que les pokémons seront toujours affichés dans
  l'ordre de leur pokeIndex. En faisant a - b, a sera soit négatif, égal ou positif. Si a devient négatif 
  alors il sera placer avant b ect... */

}


