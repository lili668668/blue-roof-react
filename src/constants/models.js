import Immutable from 'immutable'

export const ListPostState = Immutable.fromJS({
  title: '',
  author: '',
  content: '',
  created: Date.now(),
  updated: Date.now()
})
