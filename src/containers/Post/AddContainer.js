import { connect } from 'react-redux'
import { Post } from '../../pages'

import { PostActions, UiActions } from '../../actions'

export default connect(
  (state) => ({
    title: state.getIn(['post', 'title']),
    author: state.getIn(['post', 'author']),
    content: state.getIn(['post', 'content']),
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
    const { title, author, content } = stateProps
    const { addPost, showForm } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      addPost: addPost({title: title, author: author, content: content}),
      showForm: showForm()
    })
  }
)(Post.Add)


