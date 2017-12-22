import { createAction } from 'redux-actions'
import config from '../config'
import axios from 'axios'
import {
  LIST_POSTS,
  TITLE_CHANGE,
  INITIAL_FORM,
  CONTENT_CHANGE
} from '../constants/actionTypes'

import {
  Loaded,
  Loading
} from '../actions/UiActions'

export const ListPosts = () => {
  return (dispatch) => {
    dispatch(Loading())
    axios.get(`http://${config.api_host}:${config.api_port}/api/posts`)
    .then(res => {
      dispatch({ type: LIST_POSTS, payload: { posts: res.data['posts'] } })
      dispatch(Loaded())
    })
  }
}

export const AddPost = (post) => {
  return (dispatch) => {
    axios.post(`http://${config.api_host}:${config.api_port}/api/post`, post)
  }
}

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
