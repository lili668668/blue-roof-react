import config from '../config'
import axios from 'axios'
import {
  LIST_POST_LOADING,
  LIST_POST_SUCCESS,
  LIST_POST_FAIL,
  ADD_POST
} from '../constants/actionTypes'

import {
  loading,
  loaded
} from './UiActions'

export const ListPost = () => {
  return (dispatch) => {
    dispatch({ type: LIST_POST_LOADING })
    dispatch(loading())
    axios.get(`http://${config.api_host}:${config.api_port}/api/mock_posts`)
    .then(res => {
      dispatch({ type: LIST_POST_SUCCESS, payload: { data: res.data } })
      dispatch(loaded())
    })
    .catch(() => dispatch({ type: LIST_POST_FAIL }))
  }
}
