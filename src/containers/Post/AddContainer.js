import { connect } from 'react-redux'
import { Post } from '../../pages'

import { PostActions, UiActions } from '../../actions'

export default connect(
  (state) => ({
    post: state.getIn(['post', 'post']),
    isLoaded: state.getIn(['ui', 'isLoaded']),
    isSaved: state.getIn(['ui', 'isSaved'])
  }),
  (dispatch) => ({
    addPost: (post) => () => (
      dispatch(PostActions.AddPost(post))
    ),
    showForm: () => () => (
        dispatch(UiActions.ShowForm())
    ),
    titleChange: (event) => (
        dispatch(PostActions.TitleChange(event.target.value))
    ),
    contentChange: (event) => (
        dispatch(PostActions.ContentChange(event.target.value))
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { post } = stateProps
    const { addPost, showForm } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      addPost: addPost(post),
      showForm: showForm()
    })
  }
)(Post.Add)


