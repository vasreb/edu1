import { createStore, applyMiddleware } from 'redux'
import main from '../reducers/main'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let store = createStore(main, applyMiddleware(thunk, logger))

export default store
