import { Component } from 'react';
import { connect } from 'react-redux';
import { initRegionList, initPokemonList } from './ducks/pokemonReducer';
import mainRoutes from './mainRoutes';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value })
  }

  render() {
    return (
      <div className="App" >
        <Login />
        <h1>POKEMON BATTLE LOGO PLACEHOLDER</h1>
        <main>
          {mainRoutes}
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

export default connect(mapStateToProps, { initRegionList, initPokemonList })(App)
