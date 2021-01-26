import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTeam } from '../../ducks/userReducer';
import axios from 'axios';

const NameTeam = props => {
    const [nameInput, setInput] = useState('')

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.history.push('/')
        }
        if (props.user.team.hasOwnProperty('team_name')) {
            props.history.push('team-builder')
        }
    }, [props.user.loggedIn, props.history, props.user.team])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/team', { teamName: nameInput })
            .then(res => {
                console.log(res.data);
                props.addTeam(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <form>
            <input value={nameInput} onChange={e => setInput(e.target.value)} required />
            <button type='submit' onClick={handleSubmit}></button>
        </form>
    )
}

const mapStateToProps = stateRedux => {
    return {
        user: stateRedux.user
    }
}

export default connect(mapStateToProps, { addTeam })(NameTeam)