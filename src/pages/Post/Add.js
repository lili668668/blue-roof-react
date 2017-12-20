import React, { Component } from 'react'
import { Grid, TextField } from 'material-ui'

import { Title } from '../../components'

class Add extends Component {

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Title title='加入文章' />
          <TextField label='標題' margin='normal' />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
        )
  }
}

export default Add



