import React, { Component } from 'react'
import { Carousel } from 'antd';
import {Link} from 'react-router-dom'
import Img from './img/challengeUA.jpg'
import PropTypes from 'prop-types';

import './slider.scss'

  
export class Slider extends Component {
    render()
   
    {
        return (
            <div id="carouselGroup">
                <Carousel arrows {...settings}  >
                    { this.props.item.map(x=>{
                        return(
                        <div className="content" key={x.id} >
                                <div className="GroupCard">
                                    <div className="GroupCard__wrapper">
                                        <img src={Img}/>
                                        <h5>{x.name}</h5>
                                        <h6>
                                            <Link to={`/marathon/task/${x.pathUrl}`} state={x}> Переглянути</Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            )
                   })}
                </Carousel>
            </div>
                        
        );
    }
}


export default Slider

Slider.propTypes = {
    item: PropTypes.array
};

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 1550,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};