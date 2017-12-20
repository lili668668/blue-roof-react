import { handleActions } from 'redux-actions'
import { UiState } from '../constants/models'

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
