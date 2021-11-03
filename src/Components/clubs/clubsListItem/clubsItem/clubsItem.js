import React from 'react'
import 'antd/dist/antd.css';
import "./clubsItem.scss";
import {Card , Rate} from 'antd';


class ClubsItem extends React.Component {
  render() {
    return (
      <div className="card">
        <Card>
          <div className="title">
          <div className="title__img"> 
            <img src="./static/images/categories/music.svg" />
          </div>
          <p>American Gymnastics Club</p>
          </div>
          <div className="club-tags">
            <div className="tag">
              <img src="./static/images/categories/art.svg"/>
              <p>Спортивні секції</p>
            </div>
          </div>
          <p className="description">Американський гімнастичний клуб (American Gymnastics Club) – перша 
          та єдина в країні мережа унікальних спортивних клубів, яка базується на Розвивальній Гімнастиці. 
          Крім щоденних занять, в Американському гімнастичному Клубі проходять «Показові виступи» та різноманітні 
          тематичні вечірки, які допомагають зібрати активних однодумців і популяризувати та прививати любов до спорту, 
          перетворюючи його в стиль життя.</p>
          <Rate />
          <div className="adress">
            <img src="./static/images/map/cluster.png"/>
            <p>Київ, вулиця Фізкультури 1</p>
            </div>

          <button className="more-info"><a href="/">Детальніше</a></button>
        </Card>
      </div>
    );
  }
}

export default ClubsItem;
