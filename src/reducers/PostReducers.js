import { handleActions } from 'redux-actions'
import { PostState } from '../constants/models'

const PostReducers = handleActions({
  LIST_POSTS: (state, { payload }) => (
    state.merge({
      posts: payload.posts
    })
  ),
  TITLE_CHANGE: (state, { payload }) => (
    state.merge({
      post: { title: payload.title }
    })
  ),
  CONTENT_CHANGE: (state, { payload }) => (
    state.merge({
      post: { content: payload.content }
    })
  )
}, PostState)

export default PostReducers
