import config from '../../config'
import axios from 'axios'
import {
  LIST_POSTS,
  DELETE_POST
} from '../../constants/actionTypes'

import {
  Loaded,
  Loading
} from '../../actions/UiActions'

export const ListPosts = () => {
  return (dispatch) => {
    dispatch(Loading())
    axios.get(`http://${config.api_host}:${config.api_port}/api/posts`)
    .then(res => {
      dispatch({ type: LIST_POSTS, payload: { posts: res.data['posts'] } })
      dispatch(Loaded())
    })
  }
}

export const DeletePost = (id, index) => {
  return (dispatch) => {
    dispatch(Loading())
    dispatch({ type: DELETE_POST, payload: {index: index} })
    axios.delete(`http://${config.api_host}:${config.api_port}/api/post/${id}`)
      .then(() => dispatch(Loaded()))
  }
}
