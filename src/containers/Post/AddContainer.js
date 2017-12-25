import { connect } from 'react-redux'
import { Post } from '../../pages'

import { AddActions } from '../../actions/Post'

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    addPost: (values) => (
      dispatch(AddActions.AddPost(values))
    ),
    cancel: () => () => (
      dispatch(AddActions.Cancel())
    )
  })
)(Post.Add)


