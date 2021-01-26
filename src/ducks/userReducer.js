
const initialState = {
    user: {},
    team: {},
    loggedIn: false
}

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_TEAM = 'ADD_TEAM'

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function removeUser() {
    return {
        type: REMOVE_USER
    }
}

export function addTeam(teamObj) {
    return {
        type: ADD_TEAM,
        payload: teamObj
    }
}

export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_USER:
            return { ...state, user: payload, loggedIn: true };
        case REMOVE_USER:
            return { ...state, user: {}, team: {}, loggedIn: false };
        case ADD_TEAM:
            return { ...state, team: payload };
        default:
            return state;
    }
}

