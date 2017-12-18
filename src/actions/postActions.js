import { createAction } from 'redux-actions'
import {
  LIST_POST,
  ADD_POST
} from '../constants/actionTypes'

export const listPost = createAction(LIST_POST)
export const addPost = createAction(ADD_POST)
