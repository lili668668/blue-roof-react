import { push } from 'react-router-redux'
import config from '../../config'
import axios from 'axios'
import {
  FILL_POST
} from '../../constants/actionTypes'

import {
  Loaded,
  Loading,
  NoError,
  Error
} from '../../actions/UiActions'

export const FillPost = (id) => {
  return (dispatch) => {
    dispatch(NoError())
    dispatch(Loading())
    return axios.get(`http://${config.api_host}:${config.api_port}/api/post/${id}`)
      .then(res => {
        dispatch({ type: FILL_POST, payload: { post: res.data['post'] } })
        dispatch(Loaded())
      })
      .catch(err => dispatch(Error(err)))
  }
}

export const ModifyPost = (values) => {
  return (dispatch) => {
    var post = {
      _id: values.get('_id'),
      title: values.get('title'),
      author: values.get('author'),
      content: values.get('content'),
      created: values.get('created')
    }
    return axios.put(`http://${config.api_host}:${config.api_port}/api/post/${post._id}`, post)
      .then(() => dispatch(push('/posts')))
  }
}

export const Cancel = () => {
  return (dispatch) => {
    dispatch(push('/posts'))
  }
}
