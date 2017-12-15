import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
        <div>
          <header class='mdc-toolbar'>
            <div class='mdc-toolbar__row'>
              <section class='mdc-toolbar__section mdc-toolbar__section--align-start'>
                <span class='mdc-toolbar__title'>
                  Blue Roof
                </span>
              </section>
            </div>
          </header>
          {this.props.children}
        </div>
        )
  }
}

export default App
