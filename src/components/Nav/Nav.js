import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from 'material-ui'

class Nav extends Component {
  render() {
    return (
        <AppBar position='static'>
          <Toolbar>
            <Typography type='title' component={Link} to='/' style={{ color: 'white', textDecoration: 'none' }}>
              Blue Roof
            </Typography>
          </Toolbar>
        </AppBar>
        )
  }
}

export default Nav
