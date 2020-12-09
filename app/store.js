import { applyMiddleware, createStore } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './redux/index'

export const stores = 
process.env.NODE_ENV === 'production' ? 
(
    createStore(reducer, applyMiddleware(thunk))
) : 
(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? (
        createStore(reducer, compose(applyMiddleware(thunk), createLogger(), window.__REDUX_DEVTOOLS_EXTENSION__()))
    ) : (
        createStore(reducer, applyMiddleware(thunk), createLogger())
    )
)