import { createAction } from 'redux-actions'
import {
  LOADING,
  LOADED,
  UNSAVE,
  SAVED,
  SHOWFORM
} from '../constants/actionTypes'

export const Loading = createAction(LOADING)
export const Loaded = createAction(LOADED)
export const Unsave = createAction(UNSAVE)
export const Saved = createAction(SAVED)
export const ShowForm = createAction(SHOWFORM)
