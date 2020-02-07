import React, { Component } from 'react';
import MyComponent from './typist';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl';

class App extends Component{
  render(){
    return(
        <div className="container">
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Mallappally.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Stores" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
                </Nav>
                      <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                      </Form>
                    </Navbar.Collapse>
                  </Navbar>
                  <br />
          <p>
          Mallappally (meaning "hill shrine" in Malayalam, from മല്ലൻ "Mallan" or "strong people" + പള്ളി "palli" or "shrine") is a taluk in Kerala state in India. It is one of the five taluks that make up the Pathanamthitta district. Historically a part of the kingdom of Travancore and called "Land of the BA graduates" due to English education imparted by Anglican missionaries in the 19th century, Mallappally is the original home of many Non-resident Indians, and has one of the lowest population growth and highest literacy rates in India.
          </p>
        </div>
    )
  }
}

export default App;






