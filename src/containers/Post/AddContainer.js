import { connect } from 'react-redux'
import { Post } from '../../pages'

import { PostActions } from '../../actions'

export default connect(
  (state) => ({
    post: state.getIn(['post', 'post']),
    isLoaded: state.getIn(['ui', 'isLoaded'])
  }),
  (dispatch) => ({
    addPost: (post) => () => (
      dispatch(PostActions.AddPost(post))
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { post } = stateProps
    const { addPost } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      addPost: addPost(post)
    })
  }
)(Post.Add)


