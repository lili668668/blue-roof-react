import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from 'material-ui'

class Nav extends Component {
  render() {
    return (
        <AppBar>
          <Toolbar>
            <Typography type='title'>
              <Link to='/' style={{ color: 'white' }}>
                Blue Roof
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        )
  }
}

export default Nav
