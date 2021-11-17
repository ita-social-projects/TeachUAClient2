import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import "../GroupSlider/GroupSlider.scss";
import GroupData from "../GroupData.json"
class GroupSlider extends React.Component {
    render() {
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
        return (
            <div id="carouselGroup">
                <Carousel arrows {...settings}>
                {GroupData.map(post => {
                        return( 
                            <div className="content" key={post.id}>
                                <div className="GroupCard">
                                    <div className="GroupCard__wrapper">
                                        <div className="categories-background" style={{backgroundColor: post.bgColor}}>
                                            <img src={post.path} alt="" />
                                        </div>
                                        <h5>{post.title}</h5>
                                        <p>{post.text}</p>
                                        <h6><a>Переглянути</a></h6>
                                    </div>
                                </div>
                            </div>)
                            })}
                </Carousel>
            </div>
        );
    }
}

export default GroupSlider;
