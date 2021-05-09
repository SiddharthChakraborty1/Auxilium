import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './about.css';

export default class Aboutus extends React.Component {
    render() {
        return (

            <div className="mainStyle">
            <Container className="Container shadow-box-example rounded">
              <h2>About Us</h2>
              <p className="about">
                <Container>
                  <Row>
                    <Col className="col">
                      During the pandemic, the demand for various resources has
                      shot up. Most importantly, covid patients are desperately
                      trying to access healthcare and food resources. People have
                      set their differences apart and are coming together to help
                      those in need.
                    </Col>
                    <Col className="col">
                      A single, web-based platform for the suppliers as well as
                      the people with requirements where the supplier broadcasts
                      his services/products and the people with requirements can
                      directly search for the resource through the search bar and
                      the search options.
                    </Col>
                    <Col>
                      The users, when searching for the service/product, will be
                      asked for the location access, using which, the system will
                      display all the suppliers supplying that service/product
                      within the selected distance from the user. The user may
                      then select the supplier to access their contact information
                    </Col>
                  </Row>
                </Container>
              </p>
            </Container>
          </div>
        )
    }
}
