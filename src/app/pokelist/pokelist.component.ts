import { Component, OnInit } from '@angular/core';

import { NgFor, CommonModule, NgClass } from '@angular/common';

import { PokemonService } from '../services/data';

import { PokemonComponent } from '../pokemon/pokemon.component';

import { IPokemon } from '../interfaces/pokemon.interface';

import { from, forkJoin, mergeMap, of, map, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [NgFor, CommonModule, NgClass, PokemonComponent],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})


export class PokelistComponent implements OnInit {

  public pokemons: any[] = [];

  public selectedPokemonIndex: string | number | null = null;

  constructor(private pokemonService: PokemonService) { }

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/images/pixel_pokeball.png?raw=true';

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .pipe(
        mergeMap((response: any) => from(response.results)),
        mergeMap((result: any) => 
          this.pokemonService.getPokemonData(result.name)
            .pipe(
              mergeMap((pokemon: any) => 
                forkJoin({
                  basic: of(pokemon),
                  more: this.pokemonService.getMorePokemonData(pokemon.pokeIndex)
                })
              ),
              map(({ basic, more }) => ({ ...basic, ...more }))
            )
        ),
        toArray(),  
        tap((pokemons: IPokemon[]) => this.pokemons = pokemons),
        tap(() => this.sortPokemons())
      )
      .subscribe({
        /*next: (pokemons) => console.log('Pokemons loaded:', pokemons),*/
        error: (err) => console.error('Échec du chargement des pokemons:', err)
      });
  }

  onFocus(index: string | number | null): void {
    this.selectedPokemonIndex = index;
  }

  private sortPokemons(): void {
    this.pokemons.sort((a, b) => a.pokeIndex - b.pokeIndex);
  }

  /* Cette function utilise la méthode sort afin de s'assurer que les pokémons seront toujours affichés dans
  l'ordre de leur pokeIndex. En faisant a - b, a sera soit négatif, égal ou positif. Si a devient négatif 
  alors il sera placer avant b ect... */

}


