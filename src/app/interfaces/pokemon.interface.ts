export interface IPokemon {
    pokeIndex?: number | string,
    pokedexId?: string,
    englishName?: string,
    frenchName?: string,
    description?: string,
    generation?: string,
    isLegendary?: boolean,
    isMythical?: boolean,
    imageFrontDefault?: string,
    imageFrontShiny?: string,
    type1?: string,
    type2?: string,
    type1Img?: string,
    type2Img?: string | null,
    crie?: string,
    height?: number,
    weight?: number
}