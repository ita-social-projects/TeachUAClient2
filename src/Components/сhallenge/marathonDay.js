import React, { Component } from "react";
import Slider from "./slider";
import marathonDayContext from "./marathonDayContext";
import "./challengeUA.scss";

export class marathonDay extends Component {
  render() {
    const name = "marathon";
    return (
      <div>
        <Slider item={marathonDayContext} name={name} />
      </div>
    );
  }
}

export default marathonDay;
