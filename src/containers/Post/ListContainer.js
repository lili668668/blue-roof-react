import { connect } from 'react-redux'
import { Post } from '../../pages'

import { ListActions } from '../../actions/Post'

export default connect(
  (state) => ({
    posts: state.get('post').getIn(['list', 'posts']),
    isLoaded: state.getIn(['ui', 'isLoaded'])
  }),
  (dispatch) => ({
    listPosts: () => () => (
      dispatch(ListActions.ListPosts())
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { listPosts } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      listPosts: listPosts()
    })
  }
)(Post.List)


