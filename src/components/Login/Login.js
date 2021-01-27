import { useState } from 'react';
import { connect } from 'react-redux';
import { setUser, removeUser, addTeam } from '../../ducks/userReducer';
import axios from 'axios';
import './Login.css';

const Login = props => {
    const [input, setInput] = useState({ usernameInput: '', passwordInput: '' });
    const [regView, setRegView] = useState(false);

    const handleChange = (e) => {
        setInput({ ...input, [`${e.target.name}`]: e.target.value })
    }

    const handleRegister = (e) => {
        axios.post('/auth/register', { username: input.usernameInput, password: input.passwordInput })
            .then(res => {
                props.setUser(res.data)
                axios.get('/api/team')
                    .then(res => props.addTeam(res.data))
                    .catch(err => console.log(err))
            })
            .catch(err => alert(err.response.request.response))
        setInput({ usernameInput: '', passwordInput: '' })
    }

    const handleLogin = (e) => {
        axios.post('/auth/login', { username: input.usernameInput, password: input.passwordInput })
            .then(res => {
                props.setUser(res.data);
                axios.get('/api/team')
                    .then(res => props.addTeam(res.data))
                    .catch(err => console.log(err))
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
        <header id="user-info">
            {props.user.loggedIn
                ? (
                    <div>
                        <h1>Trainer: {props.user.user.username}</h1>
                        <h2>Team name: {props.user.team?.team_name}</h2>
                        <button onClick={handleLogout}>LOGOUT</button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <input value={input.usernameInput} name='usernameInput' onChange={handleChange} placeholder='Username' />
                            <input value={input.passwordInput} name='passwordInput' onChange={handleChange} placeholder='Password' />
                            {!regView && <button onClick={handleLogin}>LOGIN</button>}
                            {regView && <button onClick={handleRegister}>REGISTER</button>}
                        </div>
                        <p>Not Registered? <span onClick={() => setRegView(!regView)}>Click here!</span></p>
                    </div>
                )
            }
        </header>
    );
}

const mapStateToProps = stateRedux => {
    return {
        user: stateRedux.user
    }
}

export default connect(mapStateToProps, { setUser, removeUser, addTeam })(Login);