import React from "react";
import "./Trail.css";
import antintro from "../../images/antintro.svg";
import Typewriter from "typewriter-effect";

export default class Trial extends React.Component {
  render() {
    return (
      <div>
        {/* <div>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Welcome To Auxillium..",
                  "With Team Effort",
                  "We prevail",
                ],
                autoStart: true,
                delay: 40,
                deleteSpeed:10
              }}
            />
            { <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span className="typeStyle">Welcome To our Auxillium..</span>'
                  )
                  .pauseFor(100)
                  .deleteChars(27)
                  .typeString("With Team Effort")
                  .pauseFor(100)
                  .deleteChars(16)
                  .typeString("We prevail")
                  .pauseFor(100)
                  .deleteChars(10)
                  .start();
              }}
            /> }
          </h1>
        </div> */}
        <div className="cover ">
          <img id="icon" viewBox="0 0 24 24" src={antintro} />
          <div id="h1">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "With Team Effort We prevail",
                  ],
                  autoStart: true,
                  delay: 30,
                  deleteSpeed: 10
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
