import { connect } from 'react-redux';

const PokemonList = props => {
    return (
        <div>
            {props.pokemonNameList.map((pokemon, i) => <h3 key={i}>{pokemon.pokemon_species.name}</h3>)}
        </div>
    )
}

const mapStateToProps = stateRedux => {
    return {
        pokemonNameList: stateRedux.pokemon.pokemonNameList
    }
}

export default connect(mapStateToProps)(PokemonList)