import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import food from "../../images/breakfast.svg";
import hospital from "../../images/hospital-bed.svg";
import medicine from "../../images/medicine.svg";
import oxygen from "../../images/oxygen.svg";
import ambulance from "../../images/ambulance.svg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "./AllCards.css";
import { Grid } from "@material-ui/core";
export default class AllCards extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <h1>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString(
                  '<span id="mainBlock">What are you looking for.. <span>'
                )
                .pauseFor(1000)
                .typeString('<span id="typeStyle">Ambulance?</span>')
                .pauseFor(1000)
                .deleteChars(10)
                .typeString('<span id="typeStyle">Food?</span>')
                .pauseFor(1000)
                .deleteChars(5)
                .typeString('<span id="typeStyle">Hospital Beds?</span>')
                .pauseFor(1000)
                .deleteChars(14)
                .typeString('<span id="typeStyle">Medical Supplies?</span>')
                .pauseFor(1000)
                .deleteChars(17)
                .typeString('<span id="typeStyle">Oxygen Supplies?</span>')
                .pauseFor(1000)
                .deleteChars(16)
                .start();
            }}
          ></Typewriter>
        </h1>
        <br />
        <div className="doCenterMobile">
          <CardGroup className="cardGroup">
            <Grid>
              <Row  className="mx-auto">
                <Col>
                  <a
                    style={{ textDecoration: "none", color: "#2b6777" }}
                    href="#"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <Card className="cardStyle">
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            Ambulance
                          </Card.Title>
                          <Card.Img
                            variant="top"
                            src={ambulance}
                            className="imgBack rounded mx-auto d-block"
                          />
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </a>
                </Col>

                <Col>
                  <a
                    style={{ textDecoration: "none", color: "#2b6777" }}
                    href="#"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <Card className="cardStyle">
                        <Card.Body>
                          <Card.Title className="cardTitle">Food</Card.Title>
                          <Card.Img
                            variant="top"
                            src={food}
                            className="imgBack rounded mx-auto d-block"
                          />
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </a>
                </Col>

                <Col>
                  <a
                    style={{ textDecoration: "none", color: "#2b6777" }}
                    href="#"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <Card className="cardStyle">
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            Hospital Beds
                          </Card.Title>
                          <Card.Img
                            variant="top"
                            src={hospital}
                            className="imgBack rounded mx-auto d-block"
                          />
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </a>
                </Col>
              </Row>
              </Grid>
              <Grid>
              <Row className="mx-auto">
                <Col>
                  <a
                    style={{ textDecoration: "none", color: "#2b6777" }}
                    href="#"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <Card className="cardStyle  mx-auto">
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            Medical Supplies
                          </Card.Title>
                          <Card.Img
                            variant="top"
                            src={medicine}
                            className="imgBack rounded mx-auto d-block"
                          />
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </a>
                </Col>

                <Col>
                  <a
                    style={{ textDecoration: "none", color: " #2b6777" }}
                    href="#"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      <Card className="cardStyle mx-auto">
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            Oxygen Cylinder
                          </Card.Title>
                          <Card.Img
                            variant="top"
                            src={oxygen}
                            className="imgBack rounded mx-auto d-block"
                          />
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </a>
                </Col>
              </Row>
            </Grid>
          </CardGroup>
        </div>
        ;
      </div>
    );
  }
}
