import { Component } from 'react';
import { connect } from 'react-redux';
import { initRegionList, initPokemonList } from './ducks/pokemonReducer';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    }
  }

  componentDidMount() {
    this.props.initRegionList();
  }

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value })
  }

  handleRegister = (e) => {
    const { username, password } = this.state
    axios.post('/auth/register', { username, password })
      .then(res => {
        this.setState({ loggedIn: true })
      })
      .catch(err => alert(err.response.request.response))
    this.setState({ username: '', password: '' })
  }

  handleLogin = (e) => {
    const { username, password } = this.state
    axios.post('/auth/login', { username, password })
      .then(res => {
        console.log(res.data)
        this.setState({ loggedIn: true })
      })
      .catch(err => console.log(err))
    this.setState({ username: '', password: '' })
  }

  handleLogout = () => {
    if (this.state.loggedIn) {
      axios.get('/auth/logout')
        .then(() => this.setState({ loggedIn: false }))
        .catch(err => console.log(err))
    }
  }

  render() {
    console.log(this.props.pokemon)
    const { regionList } = this.props.pokemon
    return (
      <div className="App" >
        <header id="user-info">
          {this.state.loggedIn
            ? (
              <div>
                <h1>Trainer: </h1>
                <h2>Team name:</h2>
              </div>
            ) : (
              <div>
                <input value={this.state.username} name='username' onChange={this.handleChange} placeholder='Username' />
                <input value={this.state.password} name='password' onChange={this.handleChange} placeholder='Password' />
                <button onClick={this.handleLogin}>LOGIN</button>
                <button onClick={this.handleRegister}>REGISTER</button>
              </div>
            )
          }
          <button onClick={this.handleLogout}>LOGOUT</button>
        </header>
        <main>
          <h1>POKEMON BATTLE</h1>
          <section id="battle-area">
            {regionList[0]
              ? (
                <ul>
                  {regionList.map(region => <h3>{region.name}</h3>)}
                </ul>
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
    team: stateRedux.team,
    pokemon: stateRedux.pokemon
  }
}

export default connect(mapStateToProps, { initRegionList, initPokemonList })(App);
