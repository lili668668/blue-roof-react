import { combineReducers } from 'redux-immutable'
import ui from './UiReducers'
import post from './Post'

const rootReducer = combineReducers({
  post,
  ui
})

export default rootReducer
