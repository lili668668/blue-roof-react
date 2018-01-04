import { connect } from 'react-redux'
import { Post } from '../../pages'

import { ReadActions } from '../../actions/Post'

export default connect(
  (state) => ({
    isLoaded: state.getIn(['ui', 'isLoaded']),
    isError: state.getIn(['ui', 'isError']),
    errorMsg: state.getIn(['ui', 'errorMsg']),
    post: state.get('post').getIn(['read', 'post'])
  }),
  (dispatch) => ({
    fillPost: (id) => (
      dispatch(ReadActions.FillPost(id))
    )
  })
)(Post.Read)


