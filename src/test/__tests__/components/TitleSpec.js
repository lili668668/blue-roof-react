import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { Title } from '../../../components'

describe('components/<Title />', () => {
  it('send text as children to <Title /> should become text', () => {
    const titleTag = shallow(<Title>Hello World</Title>)
    expect(titleTag.childAt(0).text()).to.equal('Hello World')
  })
})
