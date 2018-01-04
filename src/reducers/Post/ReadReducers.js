import { handleActions } from 'redux-actions'
import { ReadState } from '../../constants/models/PostModels'

const ReadReducers = handleActions({
  FILL_POST: (state, { payload }) => (
    state.merge({
      post: payload.post
    })
  )
}, ReadState)

export default ReadReducers

