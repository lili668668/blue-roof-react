import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { WrapReactMarkdon } from '../../../components'

describe('components/<WrapReactMarkdon />', () => {
  it('send text as children to <WrapReactMarkdon /> should become text', () => {
    const textTag = shallow(<WrapReactMarkdown>Hello World</WrapReactMarkdown>)
    expect(textTag.childAt(0).text()).to.equal('Hello World')
  })
})
