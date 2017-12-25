import { createAction } from 'redux-actions'
import config from '../../config'
import axios from 'axios'

export const AddPost = (post) => {
  return (dispatch) => {
    axios.post(`http://${config.api_host}:${config.api_port}/api/post`, post)
  }
}

export const Cancel = () => {
  return (dispatch) => {
    //
  }
}
