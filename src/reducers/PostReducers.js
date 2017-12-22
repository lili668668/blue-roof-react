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
      title: payload.title,
      titleError: payload.titleError
    })
  ),
  INITIAL_FORM: state => (
    state.merge({
      titleError: ''
    })
  ),
  CONTENT_CHANGE: (state, { payload }) => (
    state.merge({
      content: payload.content
    })
  )
}, PostState)

export default PostReducers
