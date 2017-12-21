import config from '../config'
import axios from 'axios'
import {
  LIST_POSTS,
  TITLE_CHANGE,
  CONTENT_CHANGE
} from '../constants/actionTypes'

import {
  Loaded,
  Loading,
  Unsave,
  Saved,
  ShowForm
} from '../actions/UiActions'

export const ListPosts = () => {
  return (dispatch) => {
    dispatch(Loading())
    axios.get(`http://${config.api_host}:${config.api_port}/api/mock_posts`)
    .then(res => {
      dispatch({ type: LIST_POSTS, payload: { posts: res.data } })
      dispatch(Loaded())
    })
  }
}

export const AddPost = (post) => {
  return (dispatch) => {
    dispatch(Loading())
    axios.post(`http://${config.api_host}:${config.api_port}/api/post`, post)
      .then(() => {
        dispatch(Saved())
      })
  }
}

export const TitleChange = (title) => {
  return (dispatch) => {
    dispatch({ type: TITLE_CHANGE, payload: { title: title } })
  }
}

export const ContentChange = (content) => {
  return (dispatch) => {
    dispatch({ type: CONTENT_CHANGE, payload: { content: content } })
  }
}
