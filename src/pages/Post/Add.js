import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Typography } from 'material-ui'
import { Save, Delete } from 'material-ui-icons'

import { Title } from '../../components'
import { PostFormContainer } from '../../containers/Post'

class Add extends Component {
  render() {
      return (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Title>
              加入文章
            </Title>
            <div>
            <PostFormContainer />
              <Grid container spacing={0} style={{ marginTop: 30 + 'px' }}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                  <Link to='/posts'>
                    <Typography align='center'>
                      <Button color='primary' raised onClick={() => this.props.addPost({title: this.props.title, author: this.props.author, content: this.props.content})}>
                        <Save />
                        儲存
                      </Button>
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={5}>
                  <Typography align='center'>
                    <Button color='accent' raised component={Link} to='/posts'>
                      <Delete />
                      捨棄
                    </Button>
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={1} sm={4}></Grid>
        </Grid>
      )
  }
}

export default Add
