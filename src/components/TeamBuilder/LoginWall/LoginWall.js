import { useEffect } from 'react';
import { connect } from "react-redux";

const LoginWall = props => {
    const { hasTeam, loggedIn } = props;
    useEffect(() => {
        if (loggedIn) {
            if (!hasTeam) {
                props.history.push('/name-team')
            } else {
                props.history.push('/team-builder')
            }
        }
    }, [loggedIn, hasTeam, props.history])
    console.log(props.user)

    return (
        <h1>LOGIN TO CONTINUE</h1>
    )
}

const mapStateToProps = stateRedux => {
    return {
        loggedIn: stateRedux.user.loggedIn,
        hasTeam: stateRedux.user.team.hasOwnProperty('team_name')
    }
}

export default connect(mapStateToProps)(LoginWall)