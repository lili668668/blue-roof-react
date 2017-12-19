import { connect } from 'react-redux'
import { Post } from '../../pages'

import { PostActions } from '../../actions'

export default connect(
  (state) => ({
    posts: state.getIn(['post', 'posts']),
    isLoaded: state.getIn(['ui', 'isLoaded'])
  }),
  (dispatch) => ({
    listPost: () => () => (
      dispatch(PostActions.ListPost())
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { posts, isLoaded } = stateProps
    const { listPost } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      listPost: listPost()
    })
  }
)(Post.List)


