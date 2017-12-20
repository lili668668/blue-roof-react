import { connect } from 'react-redux'
import { Post } from '../../pages'

import { PostActions } from '../../actions'

export default connect(
  (state) => ({
    posts: state.getIn(['post', 'posts']),
    isLoaded: state.getIn(['ui', 'isLoaded'])
  }),
  (dispatch) => ({
    listPosts: () => () => (
      dispatch(PostActions.ListPosts())
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { listPosts } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      listPosts: listPosts()
    })
  }
)(Post.List)


