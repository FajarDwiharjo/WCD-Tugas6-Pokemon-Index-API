import { Pokemon } from "./pokemon";
import { detailPokemon } from "./pokemon-detail";

export interface CachedPokemonData{
    data: Pokemon[];
    timestamp: number;
}

export interface CachedPokemonDetailData{
    data: detailPokemon;
    timestamp: number;
}