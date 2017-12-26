import { connect } from 'react-redux'
import { Post } from '../../pages'

import { ModifyActions } from '../../actions/Post'

export default connect(
  (state) => ({
    post: state.get('post').getIn(['modify', 'post'])
  }),
  (dispatch) => ({
    modifyPost: (values) => (
      dispatch(ModifyActions.ModifyPost(values))
    ),
    cancel: () => () => (
      dispatch(ModifyActions.Cancel())
    )
  })
)(Post.Modify)


