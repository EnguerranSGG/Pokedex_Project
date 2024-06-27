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

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/pixel_pokeball.png?raw=true';

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

  function renderPokedexIndex(pokeIndex: number) : string {
    if (pokeIndex < 10) {
      return `#00${pokeIndex}`;
    } else if (pokeIndex < 100) {
      return `#0${pokeIndex}`;
    } else {
      return `#${pokeIndex}`;
    }
  }

  function renderUsableHeight(height: number) : number {
    return height * 10 / 100;
  }

  function renderUsableWeight(height: number) : number {
    return height * 10 / 100;
  }

  function getTypeIcon(type: string) : string {
    switch (type) {
      case 'normal':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_normal.png?raw=true';
      case 'fighting':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_combat.png?raw=true';
      case 'flying':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_vol.png?raw=true';
      case 'poison':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_poison.png?raw=true';
      case 'ground':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_sol.png?raw=true';
      case 'rock':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_roche.png?raw=true';
      case 'bug':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_insecte.png?raw=true';
      case 'ghost':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_spectre.png?raw=true';
      case 'steel':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_acier.png?raw=true';
      case 'fire':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_feu.png?raw=true';
      case 'water':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_eau.png?raw=true';
      case 'grass':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_plante.png?raw=true';
      case 'electric':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_electrique.png?raw=true';
      case 'psychic':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_psy.png?raw=true';
      case 'ice':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_glace.png?raw=true';
      case 'dragon':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_dragon.png?raw=true';
      case 'dark':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_tenebres.png?raw=true';
      case 'fairy':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/type_fee.png?raw=true';
      default:
        return '';
    }
  }

  return {
    pokeIndex: pokemonData.id,
    pokedexId: renderPokedexIndex(pokemonData.id),
    frenchName: pokemonSpeciesData.names[4].name,
    type1: pokemonData.types[0].type.name,
    type2: pokemonData.types[1] ? pokemonData.types[1].type.name : null,
    type1Img: getTypeIcon(pokemonData.types[0].type.name),
    type2Img: pokemonData.types[1] ? getTypeIcon(pokemonData.types[1].type.name) : null,
    imageFrontDefault: pokemonData.sprites.front_default,
    imageFrontShiny: pokemonData.sprites.front_shiny,
    height: renderUsableHeight(pokemonData.height),
    weight: renderUsableWeight(pokemonData.weight),
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