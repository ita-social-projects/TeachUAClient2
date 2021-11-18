import React from 'react';
import {List,Card,Rate} from 'antd';
import 'antd/dist/antd.css';
import "./clubsItem.scss";
import ClubsData from "../clubs.json";


class ClubsItem extends React.Component {
  render(){
    const data = [];
    ClubsData.map(post => {data.push(post)});
    console.log(data)
    return (
      <List className="card" 
      pagination={{pageSize:8}} 
      dataSource={data}
      itemLayout="vertical" 
      size="large"
      renderItem = {item =>(
                <Card key={item.id}>
            <div className="title">
            <div className="title__img" style={{backgroundColor: item.bgIconTitle}}> 
              <img src="./static/images/categories/music.svg" />
            </div>
            <p>{item.title}</p>
            </div>
            <div className="club-tags">
              <div className="tag">
                <img src="./static/images/categories/art.svg"/>
                <p>Спортивні секції</p>
              </div>
            </div>
            <p className="description">{item.text}</p>
            <Rate />
            <div className="adress">
              <img src="./static/images/map/cluster.png"/>
              <p>{item.place}</p>
              </div>

            <button className="more-info"><a href="/">Детальніше</a></button>
          </Card>
      )}
      />
    );
  }
}

export default ClubsItem;
