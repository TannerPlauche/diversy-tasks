import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/root-reducer'
import thunk from 'redux-thunk';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export default store;
