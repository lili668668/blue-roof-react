import React, { Component } from 'react'
import { Grid, Cell, Textfield, FormField } from 'react-mdc-web/lib'

import { Title } from '../../components'

class Add extends Component {

  render() {
    return (
      <Grid>
        <Cell col={4}></Cell>
        <Cell col={4}>
          <Title title='加入文章' />
          <FormField>
            <Textfield floatingLabel='標題' id='title' required />
          </FormField>
        </Cell>
        <Cell col={4}></Cell>
      </Grid>
        )
  }
}

export default Add



