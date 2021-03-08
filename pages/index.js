import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import {Button, Container} from 'reactstrap'

export class Index extends Component {
  render() {
    return (
      <BaseLayout>
      <Container>
        <h1>I am Index Page.</h1>
        <Button color="danger">Danger!</Button>
      </Container>
      </BaseLayout>
    )
  }
}

export default Index;