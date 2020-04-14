import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailuser: '',
      password: ''
    }
    
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }

  onChange(e) {    
    this.setState({[e.target.name]: [e.target.value] });    
  }

  login(e) {
    // Intégration API        
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">              
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={(values) => this.login(values)}>
                      <h1>Connecter</h1>
                      <p className="text-muted">Connectez vous à votre compte</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-envelope"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="E-mail"
                                name="emailuser" onChange={this.onChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Mot de passe" 
                              autoComplete="current-password"
                              name="password" onChange={this.onChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.login} >Se connecter</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Mot de passe oublié ?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>                              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
