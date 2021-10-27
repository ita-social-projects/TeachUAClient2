import React from "react";
import "./slider.scss";
import SliderContent from './SliderContent/SliderContent';

class Slider extends React.Component {

  render() {
    return (
      <div className="Slider">
        <SliderContent></SliderContent>
      </div>
    );
  }
}

export default Slider;
