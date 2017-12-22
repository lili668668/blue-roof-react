import Immutable from 'immutable'

export const PostState = Immutable.fromJS({
  posts: [],
  title: '',
  author: 'ballfish',
  content: ''
})

export const UiState = Immutable.fromJS({
  isLoaded: false,
  isSaved: false
})
