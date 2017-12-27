import { connect } from 'react-redux'
import { Post } from '../../pages'

import { ModifyActions } from '../../actions/Post'

export default connect(
  (state) => ({
    isLoaded: state.getIn(['ui', 'isLoaded']),
    isError: state.getIn(['ui', 'isError']),
    errorMsg: state.getIn(['ui', 'errorMsg']),
    post: state.get('post').getIn(['modify', 'post'])
  }),
  (dispatch) => ({
    fillPost: (id) => (
      dispatch(ModifyActions.FillPost(id))
    ),
    modifyPost: (values) => (
      dispatch(ModifyActions.ModifyPost(values))
    ),
    cancel: () => () => (
      dispatch(ModifyActions.Cancel())
    )
  })
)(Post.Modify)


