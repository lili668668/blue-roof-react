import moxios from 'moxios'
import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  LOADING,
  LOADED,
  NO_ERROR,
  ERROR,
  LIST_POSTS,
  DELETE_POST
} from '../../../src/constants/actionTypes'
import { ListState } from '../../../src/constants/models/PostModels'
import { ListActions } from '../../../src/actions/Post'
import mockPosts from '../../mocks/getPostsMock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const noErrorExpect = { type:NO_ERROR }
const loadingExpect = { type:LOADING }
const loadedExpect = { type:LOADED }

describe('actions/ListActions', () => {
  beforeEach(() => moxios.install())

  afterEach(() => moxios.uninstall())

  describe('#ListPosts()', () => {
    it('create LIST_POSTS', () => {
      moxios.wait(() => {
        const req = moxios.requests.mostRecent()
        req.respondWith({
          status: 200,
          response: mockPosts
        })
      })

      const store = mockStore(ListState)
      return store.dispatch(ListActions.ListPosts()).then(() => {
        const actual = store.getActions()
        expect(actual).to.deep.equal([noErrorExpect, loadingExpect, { type:LIST_POSTS, payload: { posts: mockPosts['posts'] } }, loadedExpect])
      })
    })
  })

  describe('#DeletePost()', () => {
    it('create DELETE_POST', () => {
      moxios.wait(() => {
        const req = moxios.requests.mostRecent()
        req.respondWith({
          status: 200,
          response: {}
        })
      })

      const store = mockStore(ListState)
      const index = 1
      const id = '5a4525035fbc48004492f414'
      return store.dispatch(ListActions.DeletePost(id, index)).then(() => {
        const actual = store.getActions()
        expect(actual).to.deep.equal([noErrorExpect, loadingExpect, { type:DELETE_POST, payload: { index: index } }, loadedExpect])
      })
    })
  })

  describe('#ModifyPost()', () => {
    it('redirect "/post/modify/:id"', () => {
      const store = mockStore({})
      const id = '5a4525035fbc48004492f414'
      store.dispatch(ListActions.ModifyPost(id))
      const actual = store.getActions()
      expect(actual).to.deep.equal([{ type: '@@router/CALL_HISTORY_METHOD', payload: { method: 'push', args: ['/post/modify/' + id] } }])
    })
  })
})


