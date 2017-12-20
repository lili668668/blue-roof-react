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
                  <div className='mdc-text-field' data-mdc-auto-init="MDCTextField">
                    <input className='mdc-text-field__input' type='text' id='title' name='title' />
                    <label className='mdc-text-field__label' htmlFor='title'>標題</label>
                    <div className="mdc-text-field__bottom-line"></div>
                  </div>
                </div>
                <div className='mdc-layout-grid__cell'></div>
              </div>
            </div>
          </div>
        )
  }
}

export default Add



