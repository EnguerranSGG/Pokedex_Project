export class Pokemon {
    constructor(
    public pokeIndex: number,
    public pokedexId: string,
    public frenchName: string,
    public description: string,
    public generation: string,
    public isLegendary: boolean,
    public isMythical: boolean,
    public imageFrontDefault: string,
    public imageFrontShiny: string,
    public type1: string,
    public type2: string,
    public type1Img: string,
    public type2Img: string | null,
    public crie: string,
    public height: number,
    public weight: number) {
        
    }
}