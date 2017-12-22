import { handleActions } from 'redux-actions'
import { UiState } from '../constants/models/UiModels'

const UiReducers = handleActions({
  LOADING: state => (
    state.merge({
      isLoaded: false
    })
  ),
  LOADED: state => (
    state.merge({
      isLoaded: true
    })
  ),
  NO_ERROR: state => (
    state.merge({
      isError: false,
      ErrorMsg: ''
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
