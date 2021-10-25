import React from "react";
import "./slider.scss";

class Slider extends React.Component {
  render() {
    return (
      <div>
        <div className="slider">
          <div className="slider__wrapper">
             <button className="slider__arrow-left" style={{backgroundImage: 'url(/static/images/about/slider/slider-nav/Arrow_l.svg)'}} /> {/* move backgroundImage into scss */}
             <img src={"/static/images/about/slider/aboutClubs.jpg"} />
             <button className="slider__arrow-right" style={{backgroundImage: 'url(/static/images/about/slider/slider-nav/Arrow_r.svg)'}}/> {/*move backgroundImage into scss */}
          </div>
          <nav>
            <ul>
                <li className="slider__nav"></li>
                <li className="slider__nav"></li>
                <li className="slider__nav"></li>
                <li className="slider__nav"></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Slider;
