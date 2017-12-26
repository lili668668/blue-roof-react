import { handleActions } from 'redux-actions'
import { ModifyState } from '../../constants/models/PostModels'

const ModifyReducers = handleActions({
  FILL_POST: (state, { payload }) => (
    state.merge({
      post: payload.post
    })
  )
}, ModifyState)

export default ModifyReducers
