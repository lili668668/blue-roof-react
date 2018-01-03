import { expect } from 'chai'
import React from 'react'
import { mount } from 'enzyme'
import { Typography } from 'material-ui'

import { Read } from '../../../../pages/Post'
import { Title, WrapReactMarkdown } from '../../../../components'

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
      isLoaded: true,
      isError: false,
      errorMsg: '',
      match: {
        params: {
          id: ''
        }
      },
      fillPost: () => {},
      post: {
        title: 'wow, doge',
        author: 'ballfish',
        content: '# Urrr, big dog \n ## wow'
      }
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

  it('rendered <Title />', () => {
    expect(mountRead().find(Title)).to.have.lengthOf(1)
  })

  describe('when post is passed', () => {
    it('passes post to the rendered something as children', () => {
      expect(mountRead().find('#title').last().props().children).to.deep.equal(props.post.title)
      expect(mountRead().find('#author').last().props().children).to.deep.equal(props.post.author)
      expect(mountRead().find('#content').last().props().children).to.deep.equal(props.post.content)
    })
  })
})
