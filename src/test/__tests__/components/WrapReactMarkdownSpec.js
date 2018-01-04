import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { WrapReactMarkdown } from '../../../components'

describe('components/<WrapReactMarkdon />', () => {
  it('send text as children to <WrapReactMarkdon /> should become react-makrdown source', () => {
    const textTag = shallow(<WrapReactMarkdown>Hello World</WrapReactMarkdown>)
    expect(textTag.prop('source')).to.equal('Hello World')
  })
})
