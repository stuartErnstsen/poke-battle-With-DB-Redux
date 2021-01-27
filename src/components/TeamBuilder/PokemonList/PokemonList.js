import { connect } from 'react-redux';
import axios from 'axios';
import { initPokemon } from '../../../ducks/pokemonReducer';

const PokemonList = props => {
    const { changeViewFn, pokemonNameList } = props

    const getSinglePokemon = (url) => {
        axios.get(`${url}`)
            .then(res => {
                console.log(res.data)
                props.initPokemon(res.data);
            })
            .catch(err => console.log(err))
        changeViewFn('pokemonView');
    }

    return (
        <div>
            {pokemonNameList.map((pokemon, i) => <h3 key={i} onClick={() => getSinglePokemon(pokemon.pokemon_species.url)}>{pokemon.pokemon_species.name}</h3>)}
        </div>
    )
}

const mapStateToProps = stateRedux => {
    return {
        pokemonNameList: stateRedux.pokemon.pokemonNameList
    }
}

export default connect(mapStateToProps, { initPokemon })(PokemonList)