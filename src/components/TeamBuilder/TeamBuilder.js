import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RegionList from './RegionList';
import PokemonList from './PokemonList';

const TeamBuilder = props => {
    const [view, setView] = useState({
        regionListView: true,
        pokemonListView: false,
        pokemonView: false
    })
    useEffect(() => {
        if (!props.user.loggedIn) {
            props.history.push('/');
        }
    }, [props.user.loggedIn, props.history])

    const changeView = (viewName) => {
        const copy = { ...view }
        for (const prop in copy) {
            copy[prop] = prop === viewName ? true : false
        }
        setView({ ...copy })
    }

    return (
        <section>
            <section >
                {view.regionListView
                    ? (
                        <RegionList changeViewFn={changeView} />
                    ) : <h5 onClick={() => changeView('regionListView')}>change to region list view</h5>}
            </section>
            <section >
                {view.pokemonListView
                    ? (
                        <PokemonList changeViewFn={changeView} />
                    ) : <h5 onClick={() => changeView('pokemonListView')}>change to pokemon list view</h5>}
            </section>
            <section >
                {view.pokemonView
                    ? (
                        <h1>POKEMON VIEW</h1>
                    ) : <h5 onClick={() => changeView('pokemonView')}>change to pokemon view</h5>}
            </section>
        </section>
    )
}

const mapStateToProps = stateRedux => {
    return {
        user: stateRedux.user
    }
}

export default connect(mapStateToProps)(TeamBuilder);
