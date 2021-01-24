import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import teamReducer from './teamReducer';
import pokemonReducer from './pokemonReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    pokemon: pokemonReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

