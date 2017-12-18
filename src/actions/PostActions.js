import config from '../config'
import 'axios'
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

export const listPost = () => (
  (dispatch) => {
    dispatch({ type: LIST_POST_LOADING })
    dispatch(loading())
    axios.get(`http://${config.api_hots}:${config.api_port}/api/posts`)
    .then(res => res.json())
    .then(json => {
      dispatch({ type: LIST_POST_SUCCESS, payload: { data: json } })
      dispatch(loaded())
    })
    .catch(() => dispatch({ type: LIST_POST_FAIL }))
  }
)
