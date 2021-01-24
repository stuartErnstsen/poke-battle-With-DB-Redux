import { useEffect } from 'react';
import { connect } from "react-redux";

const LoginWall = props => {
    useEffect(() => {
        if (props.user.loggedIn) {
            props.history.push('/team-builder')
        }
    }, [props.user.loggedIn, props.history])

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