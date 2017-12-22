import { connect } from 'react-redux'
import { PostForm } from '../../components'

import { PostFormActions } from '../../actions/Post'

export default connect(
  (state) => ({
    title: state.get('post').getIn(['add', 'title']),
    titleError: state.get('post').getIn(['add', 'titleError']),
    author: state.get('post').getIn(['add', 'author']),
    content: state.get('post').getIn(['add', 'content'])
  }),
  (dispatch) => ({
    titleChange: (event) => (
      dispatch(PostFormActions.TitleChange(event.target.value))
    ),
    initialForm: () => () => (
      dispatch(PostFormActions.InitialForm())
    ),
    contentChange: (event) => (
      dispatch(PostFormActions.ContentChange(event.target.value))
    )
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { initialForm } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      initialForm: initialForm()
    })
  }
)(PostForm)


