import Immutable from 'immutable'

export const PostState = Immutable.fromJS({
  posts: [],
  post: {title: '', author: '', content: ''}
})

export const UiState = Immutable.fromJS({
  isLoaded: false
})
