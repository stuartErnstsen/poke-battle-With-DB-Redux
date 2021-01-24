import axios from 'axios';

const initialState = {
    regionList: [],
    currentRegionUrl: '',
    pokemonNameList: [],
    currentPokemonUrl: '',
    loading: false
}

const INIT_REGION_LIST = 'INIT_REGION_LIST'
const INIT_POKEMON_LIST = 'INIT_POKEMON_LIST'
// const GET__POKEMON = 'GET_POKEMON'

export function initRegionList() {
    const list = axios.get('https://pokeapi.co/api/v2/region').then(res => res.data)
    return {
        type: INIT_REGION_LIST,
        payload: list
    }
}


async function pokemonDrill(url) {
    //Drilling into api data to retrieve pokemon list for the region
    const regionPokedexUrl = await axios.get(url).then(res => res.data.pokedexes[0].url)
    const pokemonList = await axios.get(regionPokedexUrl).then(res => res.data.pokemon_entries)
    return { pokemonNameList: pokemonList, currentRegionUrl: regionPokedexUrl }
}


export function initPokemonList(regionUrl) {
    const obj = pokemonDrill(regionUrl)
    //RETURNS ARRAY EXAMPLE SHOWN HERE: https://pokeapi.co/api/v2/pokedex/2/
    return {
        type: INIT_POKEMON_LIST,
        payload: obj
    }
}

export default function pokemonReducer(state = initialState, action) {
    // console.log(action)
    const { type, payload } = action
    switch (type) {
        case INIT_REGION_LIST + "_PENDING":
            return { ...state, loading: true };
        case INIT_REGION_LIST + "_FULFILLED":
            return { ...state, regionList: payload.results, loading: false };
        case INIT_POKEMON_LIST + "_PENDING":
            return { ...state, loading: true }
        case INIT_POKEMON_LIST + "_FULFILLED":
            console.log(payload)
            return { ...state, ...payload, loading: false };
        default:
            return state;
    }
}