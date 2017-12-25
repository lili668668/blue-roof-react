import { combineReducers } from 'redux-immutable'
import list from './ListReducers'

const postReducer = combineReducers({
  list
})

export default postReducer
