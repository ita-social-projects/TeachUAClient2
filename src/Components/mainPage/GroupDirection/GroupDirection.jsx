import React from "react";
import "./GroupDirection.scss";
import GroupSlider from './GroupSlider/GroupSlider';

class GroupDirection extends React.Component {
    render() {
        return (
            <div className="GroupDirection" >
                <div className="GroupDirection__wrapper">
                    <div className="GroupDirection__article">
                        <h1>Оберіть напрям гуртків</h1>
                        <button className="GroupDirection__btn">Всі гуртки</button>
                    </div>
                    <div className="GroupDirection__slider">
                        <GroupSlider></GroupSlider>              
                    </div>
                   <button className="GroupDirection__btn_adaptive">Всі гуртки</button>  {/* check this to the best practice */}
                </div>
            </div>
        );
    }
}

export default GroupDirection;
