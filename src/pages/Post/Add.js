import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, TextField, Button, Typography } from 'material-ui'
import { FormHelperText } from 'material-ui/Form'
import { Save, Delete } from 'material-ui-icons'

import { Title } from '../../components'

class Add extends Component {
  componentDidMount() {
    this.props.initialForm()
  }
  render() {
      return (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Title>
              加入文章
            </Title>
            <div>
              <TextField label='標題' margin='normal' required fullWidth error={this.props.titleError !== ''} onChange={this.props.titleChange} />
              <FormHelperText error>{ this.props.titleError }</FormHelperText>
              <TextField label='內容' margin='normal' fullWidth multiline onChange={this.props.contentChange} />
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
