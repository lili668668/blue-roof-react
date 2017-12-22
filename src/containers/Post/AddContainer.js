import { connect } from 'react-redux'
import { Post } from '../../pages'

import { PostActions } from '../../actions'

export default connect(
  (state) => ({
    title: state.getIn(['post', 'title']),
    titleError: state.getIn(['post', 'titleError']),
    author: state.getIn(['post', 'author']),
    content: state.getIn(['post', 'content'])
  }),
  (dispatch) => ({
    addPost: (post) => () => (
      dispatch(PostActions.AddPost(post))
    ),
    titleChange: (event) => (
      dispatch(PostActions.TitleChange(event.target.value))
    ),
    initialForm: () => () => (
      dispatch(PostActions.InitialForm())
    ),
    contentChange: (event) => (
      dispatch(PostActions.ContentChange(event.target.value))
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { title, author, content } = stateProps
    const { addPost, initialForm } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      addPost: addPost({title: title, author: author, content: content}),
      initialForm: initialForm()
    })
  }
)(Post.Add)


