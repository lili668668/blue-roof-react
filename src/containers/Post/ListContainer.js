import { connect } from 'react-redux'
import { Post } from '../../pages'

import { ListActions } from '../../actions/Post'

export default connect(
  (state) => ({
    posts: state.get('post').getIn(['list', 'posts']),
    isLoaded: state.getIn(['ui', 'isLoaded']),
    isError: state.getIn(['ui', 'isError']),
    errorMsg: state.getIn(['ui', 'errorMsg'])
  }),
  (dispatch) => ({
    listPosts: () => () => (
      dispatch(ListActions.ListPosts())
    ),
    readPost: (id) => () => (
      dispatch(ListActions.ReadPost(id))
    ),
    deletePost: (id, index) => () => (
      dispatch(ListActions.DeletePost(id, index))
    ),
    modifyPost: (id) => () => (
      dispatch(ListActions.ModifyPost(id))
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { listPosts } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      listPosts: listPosts()
    })
  }
)(Post.List)


