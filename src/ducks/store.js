import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import teamReducer from './teamReducer';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
    // team: teamReducer,
    pokemon: pokemonReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

