import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Title from '../../src/components/Title'

describe('components/<Title />', () => {
  it('send text as children to <Title /> should become #title text', () => {
    const titleTag = shallow(<Title>Hello World</Title>)
    expect(titleTag.childAt(0).text()).to.equal('Hello World')
  })
})
