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
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { title, author, content } = stateProps
    const { addPost, initialForm } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      addPost: addPost({title: title, author: author, content: content})
    })
  }
)(Post.Add)


