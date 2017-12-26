import { combineReducers } from 'redux-immutable'
import list from './ListReducers'
import modify from './ModifyReducers'

const postReducer = combineReducers({
  list,
  modify
})

export default postReducer
