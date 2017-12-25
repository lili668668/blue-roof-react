import { push } from 'react-router-redux'
import config from '../../config'
import axios from 'axios'

export const AddPost = (values) => {
  return (dispatch) => {
    var post = {
      title: values.get('title'),
      author: 'ballfish',
      content: values.get('content')
    }
    axios.post(`http://${config.api_host}:${config.api_port}/api/post`, post)
      .then(() => dispatch(push('/posts')))
  }
}

export const Cancel = () => {
  return (dispatch) => {
    dispatch(push('/posts'))
  }
}
