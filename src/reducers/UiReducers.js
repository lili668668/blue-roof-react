import { handleActions } from 'redux-actions'
import { UiState } from '../constants/models/UiModels'

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
  NO_ERROR: state => (
    state.merge({
      isError: false,
      errorMsg: ''
    })
  ),
  ERROR: (state, { payload }) => (
    state.merge({
      isError: true,
      errorMsg: payload.msg
    })
  )
}, UiState)

export default UiReducers
