import { handleActions } from 'redux-actions'
import { ListState } from '../../constants/models/PostModels'

const ListReducers = handleActions({
  LIST_POSTS: (state, { payload }) => (
    state.merge({
      posts: payload.posts
    })
  ),
  DELETE_POST: (state, { payload }) => (
    state.set('posts', state.get('posts').splice(payload.index, 1))
  )
}, ListState)

export default ListReducers
