import { connect } from "react-redux";

const PokemonDisplay = props => {
    const { currentPokemon } = props;

    return (
        <h1>{currentPokemon.name}</h1>
    )
}

const mapStateToProps = stateRedux => {
    return {
        currentPokemon: stateRedux.pokemon.currentPokemon
    }
}

export default connect(mapStateToProps)(PokemonDisplay);