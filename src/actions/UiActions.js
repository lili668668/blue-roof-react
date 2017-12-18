import { createAction } from 'redux-actions'
import {
  LOADING,
  LOADED
} from '../constants/actionTypes'

export const loading = createAction(LOADING)
export const loaded = createAction(LOADED)
