import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/data';
import { CommonModule, NgIf } from '@angular/common';
import { mergeMap, forkJoin, of, map, tap } from 'rxjs';

@Component({
  selector: 'app-pokefocus',
  standalone: true,
  imports: [ NgIf, CommonModule],
  templateUrl: './pokefocus.component.html',
  styleUrls: ['./pokefocus.component.scss']
})
export class PokemonFocusComponent implements OnInit {

  public pokemon!: IPokemon;

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/images/pixel_pokeball.png?raw=true';
  
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id: string = this.route.snapshot.params['pokeIndex'];
  
    this.pokemonService.getMorePokemonData(id)
      .pipe(
        mergeMap((pokemon: any) =>
          forkJoin({
            basic: of(pokemon),
            more: this.pokemonService.getPokemonData(pokemon.englishName)
          })
        ),
        map(({ basic, more }) => ({ ...basic, ...more })),
        tap((pokemon: IPokemon) => {
          if (pokemon) {
            this.pokemon = pokemon;
          }
        })
      )
      .subscribe({
        /*next: (pokemon) => console.log('Pokemon loaded:', pokemon),*/
        error: (err) => console.error('Échec du chargement du pokemon:', err)
      });
  }}
