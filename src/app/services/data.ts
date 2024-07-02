import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { renderProperGeneration, renderPokedexIndex, renderUsableHeight, renderUsableWeight, getTypeIcon } from '../services/services';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private pokemons: Map<number, Pokemon> = new Map();

    constructor() { }

    async loadPokemonData() {
        const promises = [];
        for (let i = 1; i < 494; i++) {
            promises.push(this.getPokemonData(i));
        }

        const pokemonArray = await Promise.all(promises);
        pokemonArray.forEach(pokemon => {
            this.pokemons.set(pokemon.pokeIndex, pokemon);
        });

        console.log(this.pokemons);
    }

    async getPokemonData(arg: number): Promise<Pokemon> {
        const cachedPokemon = this.pokemons.get(arg);
        if (cachedPokemon) {
            return cachedPokemon;
        }

        const pokemonUrl: string = `https://pokeapi.co/api/v2/pokemon/${arg}`;
        const pokemonSpeciesUrl: string = `https://pokeapi.co/api/v2/pokemon-species/${arg}`;

        const [pokemonData, pokemonSpeciesData] = await Promise.all([
            (await fetch(pokemonUrl)).json(),
            (await fetch(pokemonSpeciesUrl)).json()
        ]);

        const pokemon: Pokemon = {
            pokeIndex: pokemonData.id,
            pokedexId: renderPokedexIndex(pokemonData.id),
            frenchName: pokemonSpeciesData.names[4].name,
            description: pokemonSpeciesData.flavor_text_entries.filter((entry: { language: { name: string }; flavor_text: string }) => entry.language.name === 'fr')[0].flavor_text,

            /* Ci-dessus, la méthode filter se voit préciser le type de entry sous la forme d'un objet avec des
            propriétés de type string afin d'éviter que TypeScript considère entry comme de type any.  */

            isLegendary: pokemonSpeciesData.is_legendary,
            isMythical: pokemonSpeciesData.is_mythical,
            generation: renderProperGeneration(pokemonSpeciesData.generation.name),
            type1: pokemonData.types[0].type.name,
            type2: pokemonData.types[1] ? pokemonData.types[1].type.name : "Pas de type 2",
            type1Img: getTypeIcon(pokemonData.types[0].type.name),
            type2Img: pokemonData.types[1] ? getTypeIcon(pokemonData.types[1].type.name) : null,
            imageFrontDefault: pokemonData.sprites.front_default,
            imageFrontShiny: pokemonData.sprites.front_shiny,
            crie: pokemonData.cries.latest,
            height: renderUsableHeight(pokemonData.height),
            weight: renderUsableWeight(pokemonData.weight),
        };

        this.pokemons.set(arg, pokemon);
        return pokemon;
    }

    getPokemons(): Array<Pokemon> {
        return Array.from(this.pokemons.values());
    }

    async getPokemonByIndex(pokemonIndex: number): Promise<Pokemon> {
        const pokemon = this.pokemons.get(pokemonIndex);
        if (!pokemon) {
            return await this.getPokemonData(pokemonIndex);
        }
        return pokemon;
    }

    async getPokemonByTypes(type1: string, type2: string | null): Promise<Array<Pokemon>> {
        const filteredPokemon: Array<Pokemon> = [];
    
        this.pokemons.forEach(pokemon => {
            if (type1 && !type2 && pokemon.type1 === this.typeTraductor(type1)) {
                filteredPokemon.push(pokemon);
            } else if (type2 && !type1 && pokemon.type2 === this.typeTraductor(type2)) {
                filteredPokemon.push(pokemon);
            } else if (type1 && type2 && 
                ((pokemon.type1 === this.typeTraductor(type1) && pokemon.type2 === this.typeTraductor(type2) || (pokemon.type1 === this.typeTraductor(type2) && pokemon.type2 === this.typeTraductor(type1))))) {
                filteredPokemon.push(pokemon);
            }
        });
    
        return filteredPokemon;
    }

    typeTraductor(type: string): string {
        switch (type) {
            case 'normal':
                return 'normal';
            case 'combat':
                return 'fighting';
            case 'vol':
                return 'flying';
            case 'poison':
                return 'poison';
            case 'sol':
                return 'ground';
            case 'roche':
                return 'rock';
            case 'insecte':
                return 'bug';
            case 'spectre':
                return 'ghost';
            case 'acier':
                return 'steel';
            case 'feu':
                return 'fire';
            case 'eau':
                return 'water';
            case 'plante':
                return 'grass';
            case 'electrik':
                return 'electric';
            case 'psy':
                return 'psychic';
            case 'glace':
                return 'ice';
            case 'dragon':
                return 'dragon';
            case "tenebres" :
                return 'dark';
            case 'fee' :
                return 'fairy';
            default:
                return 'Inconnu';
        }
    }
    
}
