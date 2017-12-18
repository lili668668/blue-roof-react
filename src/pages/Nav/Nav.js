import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
        <div>
          <header className='mdc-toolbar'>
            <div className='mdc-toolbar__row'>
              <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                <Link to='/' className='mdc-toolbar__title' style={{ color: 'white' }}>
                  Blue Roof
                </Link>
              </section>
            </div>
          </header>
        </div>
        )
  }
}

export default Nav
