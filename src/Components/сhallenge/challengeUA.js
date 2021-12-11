import React, { Component } from "react";
import Slider from "./slider";
import challengeUADoc from "./challengeContext";
import "./challengeUA.scss";

export class challengeUA extends Component {
  componentDidMount() {}
  render() {
    const name = "challengeUA";
    return (
      <div>
        <Slider item={challengeUADoc} name={name} />
      </div>
    );
  }
}

export default challengeUA;
