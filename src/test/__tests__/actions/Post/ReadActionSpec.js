import moxios from 'moxios'
import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  LOADING,
  LOADED,
  NO_ERROR,
  ERROR,
  FILL_POST
} from '../../../../constants/actionTypes'
import { ReadState } from '../../../../constants/models/PostModels'
import { ReadActions } from '../../../../actions/Post'
import mockPosts from '../../../mocks/getPostsMock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const noErrorExpect = { type:NO_ERROR }
const loadingExpect = { type:LOADING }
const loadedExpect = { type:LOADED }

describe('actions/ReadActions', () => {
  beforeEach(() => moxios.install())

  afterEach(() => moxios.uninstall())

  describe('#FillPost()', () => {
    it('create FILL_POST', () => {
      moxios.wait(() => {
        const req = moxios.requests.mostRecent()
        req.respondWith({
          status: 200,
          response: { post: mockPosts['posts'][0] }
        })
      })

      const store = mockStore(ReadState)
      return store.dispatch(ReadActions.FillPost()).then(() => {
        const actual = store.getActions()
        expect(actual).to.deep.equal([noErrorExpect, loadingExpect, { type:FILL_POST, payload: { post: mockPosts['posts'][0] } }, loadedExpect])
      })
    })
  })

})


