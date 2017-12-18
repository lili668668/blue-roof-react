import { connect } from 'react-redux'
import { Post } from '../../pages/'

import {
  listPost
} from '../../actions'

export default connect(
  (state) => ({
    posts: state.getIn(['post', 'posts'])
  }),
  (dispatch) => ({
    listPost: () => (
      dispatch(listPost())
    )
  })
)(Post.List)
