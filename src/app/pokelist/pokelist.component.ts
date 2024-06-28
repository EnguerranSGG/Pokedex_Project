import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../interfaces/pokemon';

import { NgFor, CommonModule, NgClass} from '@angular/common';

import { renderProperGeneration, renderPokedexIndex, renderUsableHeight, renderUsableWeight, getTypeIcon } from '../services/services';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [NgFor, CommonModule, NgClass],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})


export class PokelistComponent implements OnInit {

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/pixel_pokeball.png?raw=true';

  public PokemonData: Array<Pokemon> = [];

  public selectedPokemonIndex: number | null = null;

  ngOnInit() {
    this.loadPokemonData();
  }

  async loadPokemonData() {
    const promises = [];
    for (let i = 1; i < 494; i++) {
      promises.push(GetPokemonData(i));
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

  closeModal(): void {
    this.selectedPokemonIndex = null;
  }

}

async function GetPokemonData(arg: number) : Promise<Pokemon> {

  const pokemonUrl : string = `https://pokeapi.co/api/v2/pokemon/${arg}`;

  const pokemonSpeciesUrl : string = `https://pokeapi.co/api/v2/pokemon-species/${arg}`;

  const [pokemonData, pokemonSpeciesData] = await Promise.all([
    (await fetch(pokemonUrl)).json(),
    (await fetch(pokemonSpeciesUrl)).json()
  ])

  return {
    pokeIndex: pokemonData.id,
    pokedexId: renderPokedexIndex(pokemonData.id),
    frenchName: pokemonSpeciesData.names[4].name,
    description: pokemonSpeciesData.flavor_text_entries[0].flavor_text,
    isLegendary: pokemonSpeciesData.is_legendary,
    isMythical: pokemonSpeciesData.is_mythical,
    generation: renderProperGeneration(pokemonSpeciesData.generation.name),
    type1: pokemonData.types[0].type.name,
    type2: pokemonData.types[1] ? pokemonData.types[1].type.name : null,
    type1Img: getTypeIcon(pokemonData.types[0].type.name),
    type2Img: pokemonData.types[1] ? getTypeIcon(pokemonData.types[1].type.name) : null,
    imageFrontDefault: pokemonData.sprites.front_default,
    imageFrontShiny: pokemonData.sprites.front_shiny,
    crie: pokemonData.cries.latest,
    height: renderUsableHeight(pokemonData.height),
    weight: renderUsableWeight(pokemonData.weight),
  } ;

}
