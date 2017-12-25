import { combineReducers } from 'redux-immutable'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form/immutable'
import post from './Post'
import ui from './UiReducers'

const rootReducer = combineReducers({
  router,
  form,
  post,
  ui
})

export default rootReducer
