import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Main.css";

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <br/>
        <div className="cardBack">
          <CardGroup className="cardGroup">
            <a
              style={{ textDecoration: "none", color: " rgb(15, 81, 93)" }}
              href="#"
              className="shadow-box-example"
            >
              <Card
                border="light"
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",

                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Oxygen Cylinder</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://static.thenounproject.com/png/1814863-200.png"
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </a>
            <a
              style={{ textDecoration: "none", color: " rgb(15, 81, 93)" }}
              href="#"
              className="shadow-box-example"
            >
              <Card
                border="light"
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Medicines</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/736x/a8/36/6b/a8366b7e0676501f4c53e433f27b4f26.jpg"
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </a>
            <a
              style={{ textDecoration: "none", color: " rgb(15, 81, 93)" }}
              href="#"
              className="shadow-box-example"
            >
              <Card
                border="light"
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Hospital Beds</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://image.flaticon.com/icons/png/512/12/12609.png"
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </a>
            <a
              style={{ textDecoration: "none", color: " rgb(15, 81, 93)" }}
              href="#"
              className="shadow-box-example"
            >
              <Card
                border="light"
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Food</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/originals/5e/fa/77/5efa77186bd7ca39e06aae2bad562351.png"
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </a>
            <a
              style={{ textDecoration: "none", color: " rgb(15, 81, 93)" }}
              href="#"
              className="shadow-box-example"
            >
              <Card
                border="light"
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Food</Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://i.pinimg.com/originals/5e/fa/77/5efa77186bd7ca39e06aae2bad562351.png"
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </a>
            
            
          </CardGroup>
        </div>
        <br />
        <div className="mainStyle">
          <Container className="Container shadow-box-example rounded">
            <h2>About Us</h2>
            <p className="about"><b>
              During the pandemic, the demand for various resources has shot up.
              Most importantly, covid patients are desperately trying to access
              healthcare and food resources. People have set their differences
              apart and are coming together to help those in need.
              <br/>
              <br/>A single, web-based platform for the suppliers as well as
              the people with requirements where the supplier broadcasts his
              services/products and the people with requirements can directly
              search for the resource through the search bar and the search
              options.<br/><br/>The users, when searching for the service/product, will
              be asked for the location access, using which, the system will
              display all the suppliers supplying that service/product within
              the selected distance from the user. The user may then select the
              supplier to access their contact information
              </b></p>
          </Container>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
