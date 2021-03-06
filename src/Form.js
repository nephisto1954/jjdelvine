import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Container, Row, Col} from 'reactstrap';
import axios from 'axios'

class Form extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this)


  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    e.target.reset()

    const { name, email, message } = this.state

    const form = await axios.post('api/form', {
      name,
      email,
      message
    })
  }

  render() {
    return(
      <Container>
        <Row>
          <Col>
            <Form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                type="text"
                name="name"
                onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                type="email"
                name="email"
                onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="message">Message:</Label>
                <Input
                type="textarea"
                name="message"
                onChange={this.handleChange}/>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Form;































