import { connect } from 'react-redux'
import { Post } from '../../pages'

import { AddActions } from '../../actions/Post'

export default connect(
  (state) => ({
    title: state.get('post').getIn(['add', 'title']),
    titleError: state.get('post').getIn(['add', 'titleError']),
    author: state.get('post').getIn(['add', 'author']),
    content: state.get('post').getIn(['add', 'content'])
  }),
  (dispatch) => ({
    addPost: (post) => () => (
      dispatch(AddActions.AddPost(post))
    ),
    titleChange: (event) => (
      dispatch(AddActions.TitleChange(event.target.value))
    ),
    initialForm: () => () => (
      dispatch(AddActions.InitialForm())
    ),
    contentChange: (event) => (
      dispatch(AddActions.ContentChange(event.target.value))
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


