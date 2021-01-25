import { useEffect } from 'react';
import { connect } from 'react-redux';

const TeamBuilder = props => {
    useEffect(() => {
        if (!props.user.loggedIn) {
            props.history.push('/');
        }
    }, [props.user.loggedIn, props.history])

    return (
        <section>
            <h1>TeamBuilder SECTION</h1>
        </section>
    )
}

const mapStateToProps = stateRedux => {
    return {
        user: stateRedux.user
    }
}

export default connect(mapStateToProps)(TeamBuilder);
