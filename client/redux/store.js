import { createWrapper } from "next-redux-wrapper"
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './thunks/rootReducer'
import thunk from "redux-thunk"
import logger from "redux-logger"

const middleware = applyMiddleware(thunk, /*logger*/)

const makeStore = () => createStore(rootReducer, composeWithDevTools(middleware))

export const wrapper = createWrapper(makeStore);