
const initialState = {
    user: {},
    loggedIn: false
}

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

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

export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_USER:
            return { ...state, user: payload, loggedIn: true };
        case REMOVE_USER:
            return { ...state, user: {}, loggedIn: false };
        default:
            return state;
    }
}

