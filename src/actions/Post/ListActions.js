import { push } from 'react-router-redux'
import config from '../../config'
import axios from 'axios'
import {
  LIST_POSTS,
  DELETE_POST
} from '../../constants/actionTypes'

import {
  Loaded,
  Loading,
  NoError,
  Error
} from '../../actions/UiActions'

export const ListPosts = () => {
  return (dispatch) => {
    dispatch(NoError())
    dispatch(Loading())
    return axios.get(`http://${config.api_host}:${config.api_port}/api/posts`)
    .then(res => {
      dispatch({ type: LIST_POSTS, payload: { posts: res.data['posts'] } })
      dispatch(Loaded())
    })
    .catch(err => dispatch(Error(err)))
  }
}

export const DeletePost = (id, index) => {
  return (dispatch) => {
    dispatch(NoError())
    dispatch(Loading())
    dispatch({ type: DELETE_POST, payload: {index: index} })
    return axios.delete(`http://${config.api_host}:${config.api_port}/api/post/${id}`)
      .then(() => dispatch(Loaded()))
      .catch(err => dispatch(Error(err)))
  }
}

export const ModifyPost = (id) => {
  return (dispatch) => {
    dispatch(push(`/post/modify/${id}`))
  }
}

export const ReadPost = (id) => {
  return (dispatch) => {
    dispatch(push(`/post/read/${id}`))
  }
}
