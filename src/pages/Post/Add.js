import React, { Component } from 'react'
import { Grid, TextField, Button, Typography } from 'material-ui'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { Save, Delete } from 'material-ui-icons'

import { Title } from '../../components'

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
            <FormControl fullWidth>
              <TextField label='標題' margin='normal' required error={this.props.post.title === ''} onChange={this.props.titleChange} />
              {this.props.post.title === ''
                (<FormHelperText error>此處必填</FormHelperText>)
              }
            </FormControl>
            <TextField label='內容' margin='normal' fullWidth multiline onChange={this.props.contentChange} />
            <Grid container spacing={0} style={{ marginTop: 30 + 'px' }}>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <Typography align='center'>
                  <Button color='primary' raised onClick={this.props.addPost({title: this.props.title, author: 'ballfish', this.props.content})}>
                    <Save />
                    儲存
                  </Button>
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography align='center'>
                  <Button color='accent' raised onClick={this.props.cancel()}>
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



