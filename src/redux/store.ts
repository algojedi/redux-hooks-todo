import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducers } from './reducers/reducers'

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, logger))
)
