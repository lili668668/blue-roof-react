import { createAction } from 'redux-actions'
import {
  TITLE_CHANGE,
  INITIAL_FORM,
  CONTENT_CHANGE
} from '../../constants/actionTypes'

export const TitleChange = (title) => {
  return (dispatch) => {
    var titleError = ''
    if (title === '') {
      titleError = '此處必填'
    }
    dispatch({ type: TITLE_CHANGE, payload: { title: title, titleError: titleError } })
  }
}

export const InitialForm = createAction(INITIAL_FORM)

export const ContentChange = (content) => {
  return (dispatch) => {
    dispatch({ type: CONTENT_CHANGE, payload: { content: content } })
  }
}
