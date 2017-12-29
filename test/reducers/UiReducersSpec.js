import { expect } from 'chai'
import Immutable from 'immutable'

import {
  LOADING,
  LOADED,
  NO_ERROR,
  ERROR
} from '../../src/constants/actionTypes'
import ui from '../../src/reducers/UiReducers'
import { UiState } from '../../src/constants/models/UiModels'

describe('reducers/UiReducers', () => {
  it('should return the initial state', () => {
    expect(ui(undefined, {})).to.deep.equal(UiState)
  })

  it('should handle LOADING', () => {
    const action = { type: LOADING }
    const exp = {
      isLoaded: false,
      isError: false,
      errorMsg: ''
    }
    expect(ui(UiState, action).toJS()).to.deep.equal(exp)
  })

  it('should handle LOADED', () => {
    const action = { type: LOADED }

    const exp = {
      isLoaded: true,
      isError: false,
      errorMsg: ''
    }

    expect(ui(UiState, action).toJS()).to.deep.equal(exp)
  })

  it('should handle NO_ERROR', () => {
    const action = { type: NO_ERROR }

    const exp = {
      isLoaded: false,
      isError: false,
      errorMsg: ''
    }

    expect(ui(UiState, action).toJS()).to.deep.equal(exp)
  })

  it('should handle ERROR', () => {
    const str = 'There are some errors.'
    const action = { type: ERROR, payload: { msg: str } }

    const exp = {
      isLoaded: false,
      isError: true,
      errorMsg: str
    }

    expect(ui(UiState, action).toJS()).to.deep.equal(exp)
  })
})
