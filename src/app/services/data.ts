import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { renderProperGeneration, renderPokedexIndex, renderUsableHeight, renderUsableWeight, getTypeIcon } from '../services/services';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getPokemonData(arg: number): Promise<Pokemon> {
    const pokemonUrl: string = `https://pokeapi.co/api/v2/pokemon/${arg}`;
    const pokemonSpeciesUrl: string = `https://pokeapi.co/api/v2/pokemon-species/${arg}`;

    const [pokemonData, pokemonSpeciesData] = await Promise.all([
      (await fetch(pokemonUrl)).json(),
      (await fetch(pokemonSpeciesUrl)).json()
    ]);

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
    };
  }
  
}
