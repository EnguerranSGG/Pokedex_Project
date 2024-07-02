import { Routes } from '@angular/router';

import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonFocusComponent } from './pokefocus/pokefocus.component';
import { PokeFilterComponent } from './poke-filter/pokefilter.component';

export const routes: Routes = [
    {path: "", component: PokelistComponent},
    {path: "pokedex/:pokeIndex", component: PokemonFocusComponent},
    {path: "pokefilter", component: PokeFilterComponent}
];
