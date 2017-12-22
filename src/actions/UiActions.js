import { createAction } from 'redux-actions'
import {
  LOADING,
  LOADED,
  NO_ERROR,
  ERROR
} from '../constants/actionTypes'

export const Loading = createAction(LOADING)
export const Loaded = createAction(LOADED)
export const NoError = createAction(NO_ERROR)
export const Error = (error) => {
  return (dispatch) => {
    console.log(error)
    dispatch({ type: ERROR, payload: { msg: error.message } })
  }
}
