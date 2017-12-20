import { handleActions } from 'redux-actions'
import { PostState } from '../constants/models'

const PostReducers = handleActions({
  LIST_POST_SUCCESS: (state, { payload }) => (
    state.merge({
      posts: payload.data
    })
  )
}, PostState)

export default PostReducers
