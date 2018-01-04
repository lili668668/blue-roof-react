import { expect } from 'chai'
import Immutable from 'immutable'

import {
  FILL_POST
} from '../../../../constants/actionTypes'
import read from '../../../../reducers/Post/ReadReducers'
import { ReadState } from '../../../../constants/models/PostModels'
import mockPosts from '../../../mocks/getPostsMock'

describe('reducers/ReadReducers', () => {
  it('should return the initial state', () => {
    expect(read(undefined, {})).to.deep.equal(ReadState)
  })

  it('should handle FILL_POST', () => {    
    const action = { type: FILL_POST, payload: { post: mockPosts['posts'][0] } }
    const exp = {
      post: mockPosts['posts'][0]
    }
    expect(read(ReadState, action).toJS()).to.deep.equal(exp)
  })

})

