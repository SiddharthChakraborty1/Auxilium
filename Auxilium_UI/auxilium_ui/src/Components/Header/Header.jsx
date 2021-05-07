import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>

        <Navbar bg="info" variant="light">
          <Navbar.Brand className="NavMargin" href="#home"><b>Auxilium</b></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contactus">Contact us</Nav.Link>
            </Nav>
          <Form id="login-button">
            <Button variant="outline-light ml-auto">Login</Button>
          </Form>
          
        </Navbar>
      </div>
    );
  }
}
