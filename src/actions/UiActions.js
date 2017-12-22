import { createAction } from 'redux-actions'
import {
  LOADING,
  LOADED
} from '../constants/actionTypes'

export const Loading = createAction(LOADING)
export const Loaded = createAction(LOADED)
