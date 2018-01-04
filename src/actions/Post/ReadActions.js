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
