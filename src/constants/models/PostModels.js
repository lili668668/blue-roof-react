import Immutable from 'immutable'

export const ListState = Immutable.fromJS({
  posts: []
})

export const AddState = Immutable.fromJS({
  title: '',
  titleError: '',
  author: 'ballfish',
  content: ''
})
