import { handleActions } from 'redux-actions'
import { PostState } from '../constants/models'

import {
  LIST_POST_LOADING,
  LIST_POST_SUCCESS,
  LIST_POST_FAIL,
  ADD_POST
} from '../constants/actionTypes'

const postReducers = handleActions({
  LIST_POST_SUCCESS: (state, { payload }) => (
    state.merge({
      data: payload.data
    })
  ),
  ADD_POST: (state) => (
    state.merge({
      data: payload.data
    })
  )
}, PostState)

export default postReducers
