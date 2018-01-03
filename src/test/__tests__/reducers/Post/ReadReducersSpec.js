import { expect } from 'chai'
import Immutable from 'immutable'

import {
  FILL_POST
} from '../../../../constants/actionTypes'
import { ReadReducers as read } from '../../../../reducers/Post'
import { ReadState } from '../../../constants/models/PostModels'
import mockPosts from '../../../mocks/getPostsMock'

describe('reducers/UiReducers', () => {
  it('should return the initial state', () => {
    expect(ui(undefined, {})).to.deep.equal(ReadState)
  })

  it('should handle FILL_POST', () => {    
    const action = { type: FILL_POST, payload: { post: mockPosts['posts'][0] } }
    const exp = {
      post: mockPosts['posts'][0]
    }
    expect(read(ReadState, action).toJS()).to.deep.equal(exp)
  })

})

