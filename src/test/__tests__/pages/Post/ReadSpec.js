import { expect } from 'chai'
import React from 'react'
import { mount } from 'enzyme'
import { Typography } from 'material-ui'
import Immutable from 'immutable'

import { Read } from '../../../../pages/Post'
import { Title, WrapReactMarkdown } from '../../../../components'

describe('pages/ <Read /> ', () => {
  let props
  let leastProps
  let mountedRead
  const mountRead = () => {
    if (!mountedRead || props !== leastProps) {
      leastProps = props
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
      post: Immutable.fromJS({
        title: 'wow, doge',
        author: 'ballfish',
        created: '2017-12-28T17:08:19.009Z',
        updated: undefined,
        content: '# Urrr, big dog \n ## wow'
      })
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

  describe('when post is passed, and updated is undefined', () => {
    it('passes post to the rendered something as children, and updated is not rendered.', () => {
      expect(mountRead().find('#title').last().props().children).to.deep.equal(props.post.get('title'))
      expect(mountRead().find('#author').last().props().children).to.deep.equal(props.post.get('author'))
      expect(mountRead().find('#created').last().props().children).to.deep.equal('2017/12/29 01:08:00')
      expect(mountRead().find('#updated')).to.have.lengthOf(0)
      expect(mountRead().find('#content').last().props().children).to.deep.equal(props.post.get('content'))
    })
  })

  describe('when post is passed, and updated id defined', () => {
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
        post: Immutable.fromJS({
          title: 'wow, doge',
          author: 'ballfish',
          created: '2017-12-28T17:08:19.009Z',
          updated: '2017-12-28T17:08:19.009Z',
          content: '# Urrr, big dog \n ## wow'
        })
      }
    })

    it('passes post to the rendered something as children, and updated is rendered', () => {
      expect(mountRead().find('#title').last().props().children).to.deep.equal(props.post.get('title'))
      expect(mountRead().find('#author').last().props().children).to.deep.equal(props.post.get('author'))
      expect(mountRead().find('#created').last().props().children).to.deep.equal('2017/12/29 01:08:00')
      expect(mountRead().find('#updated').last().props().children).to.deep.equal('2017/12/29 01:08:00')
      expect(mountRead().find('#content').last().props().children).to.deep.equal(props.post.get('content'))
    })
  })
})
