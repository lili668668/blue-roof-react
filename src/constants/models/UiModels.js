import Immutable from 'immutable'

export const UiState = Immutable.fromJS({
  isLoaded: false,
  isError: false,
  errorMsg: ''
})
