import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as games from './games/reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(
    combineReducers({ ...games }),
    composeWithDevTools(applyMiddleware( logger,thunk))
);

export default store;