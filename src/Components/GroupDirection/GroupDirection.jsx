import React from "react";
import "./GroupDirection.scss";
import GroupCard from './GroupCard/GroupCard'

class GroupDirection extends React.Component {
  render() {
    return (
      <div className="GroupDirection">
        <div className="GroupDirection__article">
          <h1>Оберіть напрям гуртків</h1>
          <div className="GroupDirection__btn">Всі гуртки</div>
        </div>
      <div className="GroupDirection__content">
           <GroupCard post={{article:"Спортивні секції",text:"Футбол, бокс, хокей, гімнастика, плавання, бойові мистецтва тощо",url:"./static/images/categories/tv.svg"}}></GroupCard>
          <GroupCard post={{article:"Програмування, робототехніка, STEM",text:"Вивчення природничих наук, технологій",url:"./static/images/categories/sport.svg"}}></GroupCard>
          <GroupCard post={{article:"Танці, хореографія",text:"Класичні і народні танці, брейк-данс, степ, контемп, балет та ін.",url:"./static/images/categories/center.svg"}}></GroupCard>
          <GroupCard post={{article:"Студії раннього розвитку",text:"Центри раннього розвитку, заняття для малюків, розвиток мовлення",url:"./static/images/categories/dance.svg"}}></GroupCard>
        </div>
      </div>
    );
  }
}

export default GroupDirection;
