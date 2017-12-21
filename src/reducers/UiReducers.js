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
  ),
  UNSAVE: state => (
    state.set(
      'isSaved',
      false
    )
  ),
  SAVED: state => (
    state.set(
      'isSaved',
      true
    )
  ),
  SHOWFORM: state => (
    state.set({
      isLoaded: true,
      isSaved: false
    })
  )
}, UiState)

export default UiReducers
