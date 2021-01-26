import { Component } from 'react';
import { connect } from 'react-redux';
import { initRegionList, initPokemonList } from './ducks/pokemonReducer';
import mainRoutes from './mainRoutes';
import Region from './components/TeamBuilder/Region';
import Login from './components/Login';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.initRegionList();
  }

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value })
  }

  render() {
    const { regionList, pokemonNameList } = this.props.pokemon
    return (
      <div className="App" >
        <header id="user-info">
          <Login />
        </header>
        <h1>POKEMON BATTLE LOGO PLACEHOLDER</h1>
        <main>
          {mainRoutes}
          <section id="battle-area">
            {regionList[0]
              ? (
                <div>
                  {regionList.map((region, i) => <Region key={i} regionObj={region} initPokemonListFn={this.props.initPokemonList} />)}
                  {pokemonNameList.map((pokemon, i) => <h3 key={i}>{pokemon.pokemon_species.name}</h3>)}
                </div>
              ) : (
                <div></div>
              )
            }
          </section>
        </main>

      </div>
    );
  }
}

const mapStateToProps = stateRedux => {
  return {
    // user: stateRedux.user,
    pokemon: stateRedux.pokemon
  }
}

export default connect(mapStateToProps, { initRegionList, initPokemonList })(App);
