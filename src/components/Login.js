import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser, removeUser } from '../ducks/userReducer';
import axios from 'axios';

const Login = props => {
    // constructor() {
    //     super()
    //     this.state = {
    //         usernameInput: '',
    //         passwordInput: '',
    //         loggedIn: false,
    //     }
    // }

    const [input, setInput] = useState({ usernameInput: '', passwordInput: '' });
    // const [passwordInput, setPasswordInput] = useState('');

    const handleChange = (e) => {
        // this.setState({ [`${e.target.name}`]: e.target.value })
        setInput({ ...input, [`${e.target.name}`]: e.target.value })
    }

    const handleRegister = (e) => {
        axios.post('/auth/register', { username: input.usernameInput, password: input.passwordInput })
            .then(res => {
                props.setUser(res.data)
            })
            .catch(err => alert(err.response.request.response))
        setInput({ usernameInput: '', passwordInput: '' })
    }

    const handleLogin = (e) => {
        axios.post('/auth/login', { username: input.usernameInput, password: input.passwordInput })
            .then(res => {
                props.setUser(res.data);
            })
            .catch(err => console.log(err))
        setInput({ usernameInput: '', passwordInput: '' })
    }

    const handleLogout = () => {
        if (props.user.loggedIn) {
            axios.get('/auth/logout')
                .then(() => {
                    props.removeUser();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            {props.user.loggedIn
                ? (
                    <div>
                        <h1>Trainer: {props.user.user.username}</h1>
                        <h2>Team name:</h2>
                    </div>
                ) : (
                    <div>
                        <input value={input.usernameInput} name='usernameInput' onChange={handleChange} placeholder='Username' />
                        <input value={input.passwordInput} name='passwordInput' onChange={handleChange} placeholder='Password' />
                        <button onClick={handleLogin}>LOGIN</button>
                        <button onClick={handleRegister}>REGISTER</button>
                    </div>
                )
            }
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
    );
}

const mapStateToProps = stateRedux => {
    return {
        user: stateRedux.user
    }
}

export default connect(mapStateToProps, { setUser, removeUser })(Login);