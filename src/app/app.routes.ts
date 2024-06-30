import { Routes } from '@angular/router';

import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonFocusComponent } from './pokefocus/pokefocus.component';

export const routes: Routes = [
    {path: "", component: PokelistComponent},
    {path: "pokedex/:pokeIndex", component: PokemonFocusComponent}
];
