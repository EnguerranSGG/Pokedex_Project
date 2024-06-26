import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../interfaces/pokemon';

import { NgFor, CommonModule} from '@angular/common';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})


export class PokelistComponent implements OnInit {

  public pokeballIcon: string = 'https://i.pinimg.com/736x/f0/51/45/f051457576f8e62a9d0a9906b09f3f34.jpg';

  public PokemonData: Array<Pokemon> = [];

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

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

}

async function GetPokemonData(arg: number) : Promise<Pokemon> {

  const pokemonUrl : string = `https://pokeapi.co/api/v2/pokemon/${arg}`;

  const pokemonSpeciesUrl : string = `https://pokeapi.co/api/v2/pokemon-species/${arg}`;

  const [pokemonData, pokemonSpeciesData] = await Promise.all([
    (await fetch(pokemonUrl)).json(),
    (await fetch(pokemonSpeciesUrl)).json()
  ])

  function renderPokedexIndex(pokeIndex: number) {
    if (pokeIndex < 10) {
      return `#00${pokeIndex}`;
    } else if (pokeIndex < 100) {
      return `#0${pokeIndex}`;
    } else {
      return `#${pokeIndex}`;
    }
  }

  return {
    pokeIndex: pokemonData.id,
    pokedexId: renderPokedexIndex(pokemonData.id),
    name: pokemonData.name,
    imageFrontDefault: pokemonData.sprites.front_default,
    frenchName: pokemonSpeciesData.names[4].name
  } ;

}

/*async function GetPokemonSpeciesData(arg: number) {

  const url : string = `https://pokeapi.co/api/v2/pokemon-species/${arg}`;
  
  const response = await fetch(url);

  const data = await response.json();

  return data;

}*/


/*export class PokelistComponent {

  private pokeListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000@offset=0';

  public http = inject(HttpClient);

  public data: Array<any> = [];

  ngOnInit() {
    this.http.get(this.pokeListUrl)
      .subscribe({
        next: (data: any) => {
          console.log(data.results);
          this.data = data.results;
        }
      })
  };

}*/