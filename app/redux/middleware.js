import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './index'

export const appApi = { }

export default createStore(reducers, applyMiddleware(thunk.withExtraArgument(appApi)))