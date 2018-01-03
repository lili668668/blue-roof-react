import React from 'react'
import { mount } from 'enzyme'

import { Read } from '../../../../pages/Post'
import { Title } from '../../../../components'

describe('pages/ <Read /> ', () => {
  let props
  let mountedRead
  const mountRead = () => {
    if (!mountedRead) {
      mountedRead = mount(<Read {...props} />)
    }
    return mountedRead
  }

  beforeEach(() => {
    props = {
      post
    }
  })

  it('always renders a div', () => {
    const divs = mountRead().find('div')
    expect(divs).to.have.lengthOf.above(0)
  })

  describe('the rendered div', () => {
    it('contains everything else that gets rendered', () => {
      const divs = mountRead().find('div')
      const wrappingDiv = divs.first()
      expect(wrappingDiv.children()).to.deep.equal(mountRead().children())
    })
  })

  describe('rendered <Title />', () => {
    expect(mountRead().find(Title)).to.have.lengthOf(1)
  })

  describe('when post is passed', () => {
    beforeEach(() => {
      props.post = {
        title: 'wow, doge',
        author: 'ballfish',
        content: 'Urrr, big dog'
      }
    })

    it('passes post to the rendered something as children', () => {
      const title = mountRead().find('#title')
      const author = mountRead().find('#author')
      const content = mountRead().find('#content')
      expect(title.props().children).to.deep.equal(props.post.title)
      expect(author.props().children).to.deep.equal(props.post.author)
      expect(content.props().children).to.deep.equal(props.post.content)
    })
  })
})
