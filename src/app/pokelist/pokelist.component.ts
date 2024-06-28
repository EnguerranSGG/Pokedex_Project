import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../models/pokemon';

import { NgFor, CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [NgFor, CommonModule, NgClass],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})


export class PokelistComponent implements OnInit {

  @Input() pokemon!: Pokemon;

  constructor() { }

  public pokeballIcon: string = 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/images/pixel_pokeball.png?raw=true';

  public PokemonData: Array<Pokemon> = [];

  ngOnInit() {
  }


}


