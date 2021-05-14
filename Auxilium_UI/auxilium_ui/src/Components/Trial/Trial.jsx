import React from "react";
import "./Trail.css";
import circle from "../../images/circle.svg";

export default class Trial extends React.Component {
  render() {
    return (
      <div>
        <div className="cover ">
          <img id="icon" viewBox="0 0 24 24" src={circle} />
        </div>
      </div>
    );
  }
}
