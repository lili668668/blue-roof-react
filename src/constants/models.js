import Immutable from 'immutable'

export const PostState = Immutable.fromJS({
  posts: [],
  title: '',
  titleError: '',
  author: 'ballfish',
  content: ''
})

export const UiState = Immutable.fromJS({
  isLoaded: false
})
