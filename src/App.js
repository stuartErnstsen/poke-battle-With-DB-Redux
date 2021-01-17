import { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      usernameInput: '',
      passwordInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [`${e.taget.name}`]: e.target.value })
  }

  handleRegister = (e) => {
    //SEND REQUEST TO SERVER TO TRY AND REGISTER
  }

  handleLogin = (e) => {
    //SEND REQUEST TO SERVER TO TRY AND LOGIN
  }

  render() {
    return (
      <div className="App" >
        <main>
          <input value={this.state.usernameInput} name='usernameInput' onChange={this.handleChange} placeholder='Username' />
          <input value={this.state.passwordInput} name='passwordInput' onChange={this.handleChange} placeholder='Password' />
          <button onClick={this.handleLogin}>LOGIN</button>
          <button onClick={this.handleRegister}>REGISTER</button>
        </main>
      </div>
    );
  }
}

export default App;
