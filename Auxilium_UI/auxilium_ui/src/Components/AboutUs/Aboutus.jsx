import { Paper } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-bootstrap";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useEffect } from "react";
import "./Aboutus.css";

const themes = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#ffa500",
    },
    error: {
      main: "#fff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: "20px",
    color: "orange",
    textAlign: "center",
  },
}));

export default function Aboutus() {
  const styleClass = useStyles();

  useEffect(() => {
    document.body.style.backgroundColor = "#404040";
  });
  return (
    <ThemeProvider theme={themes}>
      <div>
        <h1 className={styleClass.heading} data-testid="heading">About Us</h1>
      </div>
      <div>
        <Paper
          elevation={10}
          style={{
            borderRadius: "7px",
            backgroundColor: "black",
          }}
          className="PaperStyle"
        >
          <Carousel
            style={{  width: "100%", margin: "20px" }}
            data-testid="carousel"
          >
            <Carousel.Item interval={2000} className="carouselItem">
              <img
                className=" mx-auto img1"
                src="https://images.everydayhealth.com/homepage/health-topics-2.jpg?sfvrsn=757370ae_2"
                alt="We The Helping Hands"
              />
              <Carousel.Caption>
                <h3>We hope you are doing well..</h3>
                <p id="caption">
                  During the pandemic, the demand for various resources has shot
                  up. Most importantly, covid patients are desperately trying to
                  access healthcare and food resources. People have set their
                  differences apart and are coming together to help those in
                  need.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="carouselItem">
              <img
                className="mx-auto img2"
                src="https://www.advertisingweek360.com/wp-content/uploads/2019/09/friends-forever-friendly-group-of-people-stand-and-hugging-together-vector-id1049201542.jpg"

                alt="Let's come together to help us all"
              />
              <Carousel.Caption>
                <h3>Let's come together to help us all</h3>
                <p id="caption">
                  "Ultimately, the greatest lesson that COVID-19 can teach
                  humanity is that we are all in this together."
                  <br />
                  -Kiran Mazumdar-Shaw
                  <br />
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="carouselItem">
              <img
                className=" mx-auto img3"
                src="https://dss.andaman.gov.in/images/Vision.png"
                alt="Our Vision"
              />
              <Carousel.Caption>
                <h3>Our Vision</h3>
                <p id="caption">
                  We want to help all those who are in need of our serives,
                  where we act as a bridge between the suppliers and
                  users.Search for the products you need, and add product if you
                  have the supply of it.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
