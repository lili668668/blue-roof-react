import { connect } from 'react-redux'
import { Post } from '../../pages'

import { PostActions } from '../../actions'

export default connect(
  (state) => ({
    post: state.getIn(['post', 'post']),
    isLoaded: state.getIn(['ui', 'isLoaded'])
  }),
  (dispatch) => ({
    addPost: () => () => (
      dispatch(PostActions.ListPosts())
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { listPosts } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      listPosts: listPosts()
    })
  }
)(Post.Add)


