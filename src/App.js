import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';




class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
    })
    .catch(console.log)
  }
  render() {
    
    return (
      <Fragment>
        <Navbar color="faded" light expand="md">

          <NavbarBrand href="/">
            React Bootstrap Example
          </NavbarBrand>
          <Nav className="ml-auto" navbar>

            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Home</NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Tutorial
              </NavLink>
            </NavItem>


          </Nav>
        </Navbar>

        <Container fluid>


          <Row>
            <Col>
              {this.state.contacts.map((contact) => (

                <Card color="primary">
                  <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold">{contact.name}</CardTitle>
                    <CardSubtitle className="mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>{contact.email}</CardSubtitle>
                    <CardText className="mb-4" style={{ fontSize: '0.75rem' }}> {contact.company.catchPhrase}</CardText>
                    <Row>

                    <Col xs={{ size: 'auto' }}>
                          <Button color="success">Call</Button>
                    </Col>
                    <Col sm={'auto'}>
                          <Button color="warning">Message</Button>
                    </Col>
                    <Col sm={'auto'}>
                          <Button color="success">Email</Button>
                    </Col>
                    </Row>
                  </CardBody>
                </Card>



              ))}
            </Col>
          </Row>

        </Container>
      </Fragment>
    );
  }
}

export default App;
