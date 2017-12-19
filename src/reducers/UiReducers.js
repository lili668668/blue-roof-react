import { handleActions } from 'redux-actions'
import { UiState } from '../constants/models'

import {
  LOADING,
  LOADED
} from '../constants/actionTypes'

const UiReducers = handleActions({
  LOADING: state => (
    state.set(
      'isLoaded',
      false
    )
  ),
  LOADED: state => (
    state.set(
      'isLoaded',
      true
    )
  )
}, UiState)

export default UiReducers
