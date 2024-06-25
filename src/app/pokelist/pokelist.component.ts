import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../interfaces/pokemon';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})


export class PokelistComponent implements OnInit {

  public PokemonData: Array<Pokemon> = [];

  ngOnInit() {
    this.loadPokemonData();
  }

  async loadPokemonData() {
    const promises = [];
    for (let i = 1; i < 152; i++) {
      promises.push(GetPokemonData(i));
    }

    const results = await Promise.all(promises);

    this.PokemonData = results.map(data => ({
      pokeIndex: data.id,
      name: data.name,
      imageFrontDefault: data.sprites.front_default
    }));

    console.log(this.PokemonData);
  }
}

async function GetPokemonData(arg: number) {

  const url : string = `https://pokeapi.co/api/v2/pokemon/${arg}`;
  
  const response = await fetch(url);
  const data = await response.json();
  return data;

}

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