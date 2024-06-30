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