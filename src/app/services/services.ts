export function renderProperGeneration(generation: string) : string {
    switch (generation) {
      case 'generation-i':
        return 'première';
      case 'generation-ii':
        return 'deuxième';
      case 'generation-iii':
        return 'troisième';
      case 'generation-iv':
        return 'quatrième';
      case 'generation-v':
        return 'cinquième';
      case 'generation-vi':
        return 'sixième';
      case 'generation-vii':
        return 'septième';
      case 'generation-viii':
        return 'huitième';
      case 'generation-ix':
        return 'neuvième';
      default:
        return '';
    }
  }

  export function renderPokedexIndex(pokeIndex: number) : string {
    if (pokeIndex < 10) {
      return `#00${pokeIndex}`;
    } else if (pokeIndex < 100) {
      return `#0${pokeIndex}`;
    } else {
      return `#${pokeIndex}`;
    }
  }

  export function renderUsableHeight(height: number) : number {
    return height * 10 / 100;
  }

  export function renderUsableWeight(height: number) : number {
    return height * 10 / 100;
  }

  export function getTypeIcon(type: string) : string {
    switch (type) {
      case 'normal':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_normal.png?raw=true';
      case 'fighting':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_combat.png?raw=true';
      case 'flying':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_vol.png?raw=true';
      case 'poison':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_poison.png?raw=true';
      case 'ground':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_sol.png?raw=true';
      case 'rock':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_roche.png?raw=true';
      case 'bug':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_insecte.png?raw=true';
      case 'ghost':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_spectre.png?raw=true';
      case 'steel':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_acier.png?raw=true';
      case 'fire':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_feu.png?raw=true';
      case 'water':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_eau.png?raw=true';
      case 'grass':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_plante.png?raw=true';
      case 'electric':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_electrique.png?raw=true';
      case 'psychic':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_psy.png?raw=true';
      case 'ice':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_glace.png?raw=true';
      case 'dragon':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_dragon.png?raw=true';
      case 'dark':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_tenebres.png?raw=true';
      case 'fairy':
        return 'https://github.com/EnguerranSGG/Pokedex_Project/blob/main/src/assets/pokemon_types/type_fee.png?raw=true';
      default:
        return '';
    }
  }

  export function typeTraductor(type: string): string {
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