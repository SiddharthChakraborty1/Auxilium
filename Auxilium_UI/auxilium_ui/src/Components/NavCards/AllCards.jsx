import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import food from "../../images/breakfast.svg";
import hospital from "../../images/hospital-bed.svg";
import medicine from "../../images/medicine.svg";
import oxygen from "../../images/oxygen.svg";
import ambulance from "../../images/ambulance.svg";
import { motion } from "framer-motion";
import "./AllCards.css";

export default class AllCards extends React.Component {
  render() {
    return (
      <div>
        <CardGroup className="cardGroup">
          <a style={{ textDecoration: "none", color: "#2b6777" }} href="#">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Card
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                  background: "orange",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Ambulance</Card.Title>
                  <Card.Img
                    variant="top"
                    src={ambulance}
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </motion.div>
          </a>
          <a style={{ textDecoration: "none", color: "#2b6777" }} href="#">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Card
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                  background: "orange",
                  color: "white",
                }}
              >
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
          <a style={{ textDecoration: "none", color: "#2b6777" }} href="#">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Card
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                  background: "orange",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Hospital Beds</Card.Title>
                  <Card.Img
                    variant="top"
                    src={hospital}
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </motion.div>
          </a>
          <a style={{ textDecoration: "none", color: "#2b6777" }} href="#">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Card
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                  background: "orange",
                  color: "white",
                }}
              >
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
          <a style={{ textDecoration: "none", color: " #2b6777" }} href="#">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Card
                className="singlecard"
                style={{
                  width: "12rem",
                  height: "6rem",
                  margin: "12px",
                  position: "relative",
                  background: "orange",
                  color: "white",
                }}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">Oxygen Cylinder</Card.Title>
                  <Card.Img
                    variant="top"
                    src={oxygen}
                    className="imgBack rounded mx-auto d-block"
                  />
                </Card.Body>
              </Card>
            </motion.div>
          </a>
        </CardGroup>
      </div>
    );
  }
}
