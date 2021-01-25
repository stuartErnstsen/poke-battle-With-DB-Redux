import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTeam } from '../../ducks/userReducer';

const NameTeam = props => {
    const [nameInput, setInput] = useState('')

    useEffect(() => {
        if (!props.user.loggedIn) {
            props.history.push('/')
        }
    }, [props.user.loggedIn, props.history])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTeam(nameInput);
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

export default connect(mapStateToProps, { addTeam })(NameTeam);