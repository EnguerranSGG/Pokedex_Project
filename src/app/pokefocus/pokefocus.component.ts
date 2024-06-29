import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/data';

@Component({
  selector: 'app-pokefocus',
  standalone: true,
  imports: [],
  templateUrl: './pokefocus.component.html',
  styleUrls: ['./pokefocus.component.scss']
})
export class PokemonFocusComponent implements OnInit {

  pokemon!: Pokemon;

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/pixel_pokeball.png?raw=true';
  
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  async ngOnInit() {
    const pokemonIndex = parseInt(this.route.snapshot.params['pokeIndex'], 10); // Ensure the index is an integer

    try {
      // Ensure that the data is loaded before trying to access it
      if (this.pokemonService.getPokemons().length === 0) {
        await this.pokemonService.loadPokemonData();
      }

      // Fetch the Pokémon by index
      const pokemon = await this.pokemonService.getPokemonByIndex(pokemonIndex);

      // Check if the Pokémon was found and assign it to the component property
      if (pokemon) {
        this.pokemon = pokemon;
      } else {
        console.error(`Pokemon with index ${pokemonIndex} not found`);
      }
    } catch (error) {
      console.error('Failed to load Pokémon:', error);
      // Handle the error appropriately in your application
    }
  }
}
