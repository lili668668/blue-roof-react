import { combineReducers } from 'redux-immutable'
import ui from './UiReducers'
import post from './PostReducers'

const rootReducer = combineReducers({
  post,
  ui
})

export default rootReducer
