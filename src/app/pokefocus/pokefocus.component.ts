import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/data';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokefocus',
  standalone: true,
  imports: [ NgIf, CommonModule],
  templateUrl: './pokefocus.component.html',
  styleUrls: ['./pokefocus.component.scss']
})
export class PokemonFocusComponent implements OnInit {

  pokemon!: Pokemon;

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/pixel_pokeball.png?raw=true';
  
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  async ngOnInit() {
    const pokemonIndex = parseInt(this.route.snapshot.params['pokeIndex'], 10);

    try {
      this.pokemon = await this.pokemonService.getPokemonByIndex(pokemonIndex);
    } catch (error) {
      console.error('Failed to load Pokémon:', error);
    }
  }
}
