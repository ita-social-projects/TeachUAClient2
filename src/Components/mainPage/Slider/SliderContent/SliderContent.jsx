import React from "react";
import {Carousel, Icon} from 'antd';
import 'antd/dist/antd.css';
import "../SliderContent/SliderContent.scss";

class SliderContent extends React.Component {
    render() {
        return (
            <div id="carousel">
                <Carousel autoplay arrows>
                    <div className="content">
                        <div className="content__wrapper"
                             style={{backgroundImage: `url('${process.env.PUBLIC_URL}/static/images/about/slider/aboutClubs.jpg')`}}>
                            <h1>Про гуртки українською</h1>
                            <h2>На нашому сайті ви можете обрати для вашої дитини гурток, де навчають українською
                                мовою.</h2>
                            <button className="content__btn">
                                <p>Детальніше</p>
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content__wrapper"
                             style={{backgroundImage: `url('${process.env.PUBLIC_URL}/static/images/about/slider/maraton.jpg')`}}>
                            <h1>Мовомаратон до 30-ї річниці Незалежності України</h1>
                            <h2>За 30 днів перейти на українську? Так, легко, комфортно, разом із однодумцями. Зроби
                                Україні подарунок на день Незалежності - розмовляй українською!</h2>
                            <button className="content__btn">
                                <p>Детальніше</p>
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content__wrapper"
                             style={{backgroundImage: `url('${process.env.PUBLIC_URL}/static/images/about/slider/aboutUs.jpg')`}}>
                            <h1>Про нас</h1>
                            <h2>Ініціатива "Навчай українською" - це небайдужі громадяни, які об'єдналися, щоб
                                популяризувати українську мову у сфері освіти.</h2>
                            <button className="content__btn">
                                <p>Детальніше</p>
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default SliderContent;
