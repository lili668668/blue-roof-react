import { connect } from 'react-redux'
import { Post } from '../../pages'

import { AddActions } from '../../actions/Post'

export default connect(
  (state) => ({
    title: state.get('post').getIn(['add', 'title']),
    author: state.get('post').getIn(['add', 'author']),
    content: state.get('post').getIn(['add', 'content'])
  }),
  (dispatch) => ({
    addPost: (post) => () => (
      dispatch(AddActions.AddPost(post))
    ),
    cancel: () => () => (
      dispatch(AddActions.Cancel())
    )
  })
)(Post.Add)


