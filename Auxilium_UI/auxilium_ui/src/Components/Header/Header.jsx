import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import './Header.css';
import {motion} from 'framer-motion'
export default class Header extends React.Component {
  render() {
    return (
      <div>

        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand className="NavMargin" href="#home"><b>Auxilium</b></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contactus">Contact us</Nav.Link>
            </Nav>
          <Form id="login-button">
            <motion.div
            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.9
            }}
            >
            <Button variant="outline-light ml-auto">Login</Button>
            </motion.div>
          </Form>
          
        </Navbar>
      </div>
    );
  }
}
