import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import "../GroupSlider/GroupSlider.scss";

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
                <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="GroupCard">
                            <div className="GroupCard__wrapper">
                                <div className="categories-background">
                                    <img src={'./static/images/categories/tv.svg'} alt="" />
                                </div>
                                <h5>Спортивні секції</h5>
                                <p>Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо</p>
                                <h6><a>Переглянути</a></h6>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default GroupSlider;
