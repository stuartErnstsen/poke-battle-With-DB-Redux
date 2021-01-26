import { useEffect } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

const LoginWall = props => {
    useEffect(() => {
        if (props.user.loggedIn) {
            let hasTeam = axios.get('/api/team')
                .then(res => res.data)
                .catch(err => console.log(err))
            if (!hasTeam) {
                props.history.push('/name-team')
            } else {
                props.history.push('/team-builder')
            }
        }
    }, [props.user.loggedIn, props.history])

    return (
        <h1>LOGIN TO CONTINUE</h1>
    )
}

const mapStateToProps = stateRedux => {
    return {
        user: stateRedux.user
    }
}

export default connect(mapStateToProps)(LoginWall)