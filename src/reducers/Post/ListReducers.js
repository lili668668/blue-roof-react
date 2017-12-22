import { handleActions } from 'redux-actions'
import { ListState } from '../../constants/models/PostModels'

const ListReducers = handleActions({
  LIST_POSTS: (state, { payload }) => (
    state.merge({
      posts: payload.posts
    })
  )
}, ListState)

export default ListReducers
