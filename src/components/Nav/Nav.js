import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle } from 'react-mdc-web/lib'

class Nav extends Component {
  render() {
    return (
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection align='start'>
              <ToolbarTitle>
                <Link to='/' className='mdc-toolbar__title' style={{ color: 'white' }}>
                  Blue Roof
                </Link>
              </ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        )
  }
}

export default Nav
