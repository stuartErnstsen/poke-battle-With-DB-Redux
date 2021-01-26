import { useEffect } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

const LoginWall = props => {
    useEffect(() => {
        if (props.user.loggedIn) {
            const { user_id } = props.user.user
            let hasTeam;
            axios.get('/api/team', { user_id })
                .then(res => hasTeam = res.data)
                .catch(err => console.log(err))
            if (!hasTeam) {
                props.history.push('/name-team')
            } else {
                props.history.push('/team-builder')
            }
        }
    }, [props.user, props.user.loggedIn, props.history, props.user.user])

    return (
        <h1>Please Login</h1>
    )
}

const mapStateToProps = stateRedux => {
    return {
        user: stateRedux.user
    }
}

export default connect(mapStateToProps)(LoginWall);