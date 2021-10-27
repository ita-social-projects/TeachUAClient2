import React from "react";
import "./GroupDirection.scss";
import GroupCard from './GroupCard/GroupCard'

class GroupDirection extends React.Component {
  handleLeftClick(e){

  }
  handleRightClick(e){
    
  }
  render() {
    return (
      <div className="GroupDirection">
        <button className="slider__arrow" onClick={this.handleLeftClick} style={{backgroundImage: 'url(/static/images/about/slider/slider-nav/Arrow_l.svg)'}} /> {/* move backgroundImage into scss */}
        <div className="GroupDirection__wrapper">
          <div className="GroupDirection__article">
           <h1>Оберіть напрям гуртків</h1>
           <div className="GroupDirection__btn">Всі гуртки</div>
          </div>
           <div className="GroupDirection__content">
              <ul>
                <li><GroupCard post={{article:"Спортивні секції",text:"Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо",url:"./static/images/categories/tv.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Програмування, робототехніка, STEM",text:"Вивчення природничих наук, технологій",url:"./static/images/categories/sport.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Танці, хореографія",text:"Класичні і народні танці, брейк-данс, степ, контемп, балет та ін.",url:"./static/images/categories/center.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Студії раннього розвитку",text:"Центри раннього розвитку, заняття для малюків, розвиток мовлення",url:"./static/images/categories/dance.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Спортивні секції",text:"Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо",url:"./static/images/categories/tv.svg"}}></GroupCard></li>
                <li> <GroupCard post={{article:"Спортивні секції",text:"Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо",url:"./static/images/categories/tv.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Програмування, робототехніка, STEM",text:"Вивчення природничих наук, технологій",url:"./static/images/categories/sport.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Танці, хореографія",text:"Класичні і народні танці, брейк-данс, степ, контемп, балет та ін.",url:"./static/images/categories/center.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Студії раннього розвитку",text:"Центри раннього розвитку, заняття для малюків, розвиток мовлення",url:"./static/images/categories/dance.svg"}}></GroupCard></li>
                <li><GroupCard post={{article:"Спортивні секції",text:"Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо",url:"./static/images/categories/tv.svg"}}></GroupCard></li>
              </ul>
          </div>
       </div>
       <button className="slider__arrow" onClick={this.handleRightClick} style={{backgroundImage: 'url(/static/images/about/slider/slider-nav/Arrow_r.svg)'}}/> {/*move backgroundImage into scss */}
      </div>
    );
  }
}

export default GroupDirection;
