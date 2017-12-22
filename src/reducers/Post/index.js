import { combineReducers } from 'redux-immutable'
import list from './ListReducers'
import add from './AddReducers'

const postReducer = combineReducers({
  list,
  add
})

export default postReducer
