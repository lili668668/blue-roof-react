import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import reduxThunk from 'redux-thunk'
import Immutable from 'immutable'
import createHistory from 'history/createHashHistory'
import rootReducer from '../reducers'

const initialState = Immutable.Map()
const history = createHistory()

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk, routerMiddleware(history))
)

export { store, history }
