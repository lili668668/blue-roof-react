import config from '../config'
import axios from 'axios'
import {
  LIST_POSTS
} from '../constants/actionTypes'

import {
  loaded,
  loading
} from '../actions/UiActions'

export const ListPosts = () => {
  return (dispatch) => {
    dispatch(loading())
    axios.get(`http://${config.api_host}:${config.api_port}/api/mock_posts`)
    .then(res => {
      dispatch({ type: LIST_POSTS, payload: { data: res.data } })
      dispatch(loaded())
    })
  }
}

export const AddPost = (post) => {
  return (dispatch) => {
    dispatch(loading())
    axios.post(`http://${config.api_host}:${config.api_port}/api/post`, post)
      .then(res => {
        dispatch(loaded())
      })
  }
}
