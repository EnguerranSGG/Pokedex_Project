import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/data';
import { CommonModule, NgIf } from '@angular/common';
import { mergeMap, forkJoin, of, map, tap } from 'rxjs';

@Component({
  selector: 'app-pokefocus',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './pokefocus.component.html',
  styleUrls: ['./pokefocus.component.scss']
})
export class PokemonFocusComponent implements OnInit {

  public isChecked: boolean = false;

  public pokemon!: IPokemon;

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/images/pixel_pokeball.png?raw=true';

  public audio = new Audio('https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/sounds/Poke_click.mov?raw=true');

  public audioShiny = new Audio('https://github.com/EnguerranSGG/Pokedex_Project/raw/main/src/assets/sounds/shiny_sound.mp3?raw=true');

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params['pokeIndex'];
      this.fetchPokemonData(id);
    });
    this.showShinyIcon();
  }

  fetchPokemonData(id: string) {
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
        error: (err) => console.error('Échec du chargement du pokemon:', err)
      });
  }

  showShinyIcon() {
    const unchecked = document.getElementById('chroma_logo');
    const checked = document.getElementById('chroma_logo_checked');

    if (this.isChecked === false) {
      this.isChecked = true;
      checked!.style.display = 'none';
      unchecked!.style.display = 'block';
    } else {
      this.isChecked = false;
      unchecked!.style.display = 'none';
      checked!.style.display = 'block';
      this.audioShiny.play();
    }
  }

  onCrie(crie: string) {
    const audio = new Audio(`${crie}`);
    audio.play();

    const shakingIMG = document.getElementById("doesnt_shake");
    shakingIMG?.classList.add("shake");

    setTimeout(() => {
      shakingIMG?.classList.remove('shake');
    }, 800);
  }

  navigateToNextPokemon(id : string) {
    const nextPokeIndex = parseInt(id as string) + 1;
    this.router.navigateByUrl(`/pokedex/${nextPokeIndex}`);
    this.audio.play();
  }

  navigateToPreviousPokemon(id : string) {
    const nextPokeIndex = parseInt(id as string) - 1;
    this.router.navigateByUrl(`/pokedex/${nextPokeIndex}`);
    this.audio.play();
  }
}
