import Immutable from 'immutable'

export const ListState = Immutable.fromJS({
  posts: []
})

export const ModifyState = Immutable.fromJS({
  post: {}
})

export const ReadState = Immutable.fromJS({
  post: {}
})
