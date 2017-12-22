import { handleActions } from 'redux-actions'
import { AddState } from '../../constants/models/PostModels'

const AddReducers = handleActions({
  TITLE_CHANGE: (state, { payload }) => (
    state.merge({
      title: payload.title,
      titleError: payload.titleError
    })
  ),
  INITIAL_FORM: state => (
    state.merge({
      titleError: ''
    })
  ),
  CONTENT_CHANGE: (state, { payload }) => (
    state.merge({
      content: payload.content
    })
  )
}, AddState)

export default AddReducers
