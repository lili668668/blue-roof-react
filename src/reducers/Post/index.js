import { combineReducers } from 'redux-immutable'
import list from './ListReducers'
import modify from './ModifyReducers'
import read from './ReadReducers'

const PostReducers = combineReducers({
  list,
  modify,
  read
})

export default PostReducers
