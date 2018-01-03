import { expect } from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  LOADING,
  LOADED,
  NO_ERROR,
  ERROR
} from '../../../constants/actionTypes'
import { UiState } from '../../../constants/models/UiModels'
import { UiActions } from '../../../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions/UiActions', () => {
  describe('#Loading()', () => {
    it('create LOADING', () => {
      const store = mockStore(UiState)
      store.dispatch(UiActions.Loading())
      const actual = store.getActions()
      expect(actual).to.deep.equal([{ type:LOADING }])
    })
  })

  describe('#Loaded()', () => {
    it('create LOADED', () => {
      const store = mockStore(UiState)
      store.dispatch(UiActions.Loaded())
      const actual = store.getActions()
      expect(actual).to.deep.equal([{ type:LOADED }])
    })
  })

  describe('#NoError()', () => {
    it('create NO_ERROR', () => {
      const store = mockStore(UiState)
      store.dispatch(UiActions.NoError())
      const actual = store.getActions()
      expect(actual).to.deep.equal([{ type:NO_ERROR }])
    })
  })

  describe('#Error()', () => {
    it('create ERROR', () => {
      const store = mockStore(UiState)
      const str = 'There are some errors.'
      const error = { message: str }
      store.dispatch(UiActions.Error(error))
      const actual = store.getActions()
      expect(actual).to.deep.equal([{ type:ERROR, payload: { msg: str } }])
    })
  })
})

