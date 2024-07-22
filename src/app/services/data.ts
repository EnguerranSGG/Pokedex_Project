import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { IPokemon } from '../interfaces/pokemon.interface';

import { renderProperGeneration, renderPokedexIndex, renderUsableHeight, renderUsableWeight, getTypeIcon, typeTraductor } from '../services/services';

@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    constructor(private http: HttpClient) { }

    public pokemons = signal<IPokemon[]>([]);

    getPokemons(limit : number, offset : number): Observable<IPokemon[]> {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .pipe(
                map((response: any) => {
                    return response
                }),
                tap((data) => {
                    this.pokemons.set(data);
                    /*console.log("First data:", data);*/
                })
            );
    }

    getPokemonData(name: string): Observable<IPokemon> {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .pipe(map((pokemonData: any) => {
                return {
                    pokeIndex: pokemonData.id,
                    pokedexId: renderPokedexIndex(pokemonData.id),
                    type1: pokemonData.types[0].type.name,
                    type2: pokemonData.types[1] ? pokemonData.types[1].type.name : "Pas de type 2",
                    type1Img: getTypeIcon(pokemonData.types[0].type.name),
                    type2Img: pokemonData.types[1] ? getTypeIcon(pokemonData.types[1].type.name) : null,
                    imageFrontDefault: pokemonData.sprites.front_default,
                    imageFrontShiny: pokemonData.sprites.front_shiny,
                    crie: pokemonData.cries ? pokemonData.cries.latest : null,
                    height: renderUsableHeight(pokemonData.height),
                    weight: renderUsableWeight(pokemonData.weight)
                }
            }))
    }

    getMorePokemonData(id: string): Observable<IPokemon> {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            .pipe(map((morePokemonData: any) => {
                return {
                    englishName: morePokemonData.name,

                    frenchName: morePokemonData.names.find((name: any) => name.language.name === 'fr').name,
                    description: morePokemonData.flavor_text_entries.find((entry: any) => entry.language.name === 'fr')? morePokemonData.flavor_text_entries.find((entry: any) => entry.language.name === 'fr').flavor_text : `Désolé dresseur, il n'y a pas de description française disponible. ${morePokemonData.flavor_text_entries[0].flavor_text}`,
                    isLegendary: morePokemonData.is_legendary,
                    isMythical: morePokemonData.is_mythical,
                    generation: renderProperGeneration(morePokemonData.generation.name)
                }
            }))
    }

}

/*async getPokemonByTypes(type1: string, type2: string | null): Promise<Array<Pokemon>> {

    const filteredPokemon: Array<Pokemon> = [];

    const pokemonArray = Array.from(this.pokemons.values());
 
    pokemonArray.forEach(pokemon => {
        if (type1 && !type2 && pokemon.type1 === typeTraductor(type1)) {
            filteredPokemon.push(pokemon);
        } else if (type2 && !type1 && pokemon.type2 === typeTraductor(type2)) {
            filteredPokemon.push(pokemon);
        } else if (type1 && type2 && 
            ((pokemon.type1 === typeTraductor(type1) && pokemon.type2 === typeTraductor(type2) || (pokemon.type1 === typeTraductor(type2) && pokemon.type2 === typeTraductor(type1))))) {
            filteredPokemon.push(pokemon);
        } else if (!type1 && !type2) {
            filteredPokemon.push(pokemon);
        }
    });
 
    return filteredPokemon;
}
*/

