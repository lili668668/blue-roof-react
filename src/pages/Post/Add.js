import React, { Component } from 'react'

import { Title } from '../../components'

class Add extends Component {

  render() {
    return (
          <div>
            <div className='mdc-layout-grid'>
              <div className='mdc-layout-grid__inner'>
                <div className='mdc-layout-grid__cell'></div>
                <div className='mdc-layout-grid__cell'>
                  <Title title='加入文章' />
                </div>
                <div className='mdc-layout-grid__cell'></div>
              </div>
            </div>
          </div>
        )
  }
}

export default Add



