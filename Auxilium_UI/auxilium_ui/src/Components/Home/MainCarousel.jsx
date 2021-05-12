import { Paper } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./MainCarousel.css";

export default class MainCarousel extends React.Component {
  render() {
    return (
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
            style={{ backgroundColor: "black", width: "80%", margin: "20px" }}
          >
            <Carousel.Item interval={2000}>
              <img
                className="d-block mx-auto img1"
                src="https://images.everydayhealth.com/homepage/health-topics-2.jpg?sfvrsn=757370ae_2"
                width="89%"
                height="auto"
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
            <Carousel.Item interval={2000}>
              <img
                className="d-block mx-auto img2"
                src="https://www.advertisingweek360.com/wp-content/uploads/2019/09/friends-forever-friendly-group-of-people-stand-and-hugging-together-vector-id1049201542.jpg"
                width="535px"
                height="auto"
                alt="Let's come together to help us all"
              />
              <Carousel.Caption>
                <h3>Let's come together to help us all</h3>
                <p id="caption">
                  "Ultimately, the greatest lesson that COVID-19 can teach
                  humanity is that we are all in this together."<br/>
                  -Kiran Mazumdar-Shaw
                  <br />
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-70 mx-auto img3"
                src="https://lh3.googleusercontent.com/proxy/gA3C60qZdmJx-AJ4T5R6cOTQA1G-bKfveqHcu4oQCAQB-C0ULlMcdskNJPnQmBlhPILjepdv7cfsP_4IMvv-X0a9yZ2MK619W00i2TGW"
                alt="Our Vision"
                height="300px"
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
    );
  }
}
