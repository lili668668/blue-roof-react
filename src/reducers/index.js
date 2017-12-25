import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import ui from './UiReducers'
import post from './Post'

const rootReducer = combineReducers({
  form,
  post,
  ui
})

export default rootReducer
