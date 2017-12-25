import { createAction } from 'redux-actions'
import config from '../../config'
import axios from 'axios'
import history from '../../constants/history'

export const AddPost = (post) => {
  return (dispatch) => {
    axios.post(`http://${config.api_host}:${config.api_port}/api/post`, post)
    history.push('/posts')
  }
}

export const Cancel = () => {
  return (dispatch) => {
    history.push('/posts')
  }
}
