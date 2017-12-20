import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from 'material-ui'

import { Title } from '../../components'

class Home extends Component {
  render() {
    return (
        <div>
          <Title>
            部落格owo
          </Title>
          <Typography type='display2' align='center'>
            <Button color='primary' component={Link} to='/posts' style={{fontSize: 50 + 'px', margin: 30 + 'px'}}>
              文章列表
            </Button>
          </Typography>
        </div>
        )
  }
}

export default Home

