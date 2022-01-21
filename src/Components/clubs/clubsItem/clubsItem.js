import React from "react";
import { List, Card, Rate } from "antd";
import "antd/dist/antd.css";
import "./clubsItem.scss";
import ClubsData from "../clubs.json";

class ClubsItem extends React.Component {
  render() {
    let data = [];
    ClubsData.map((post) => {
      data.push(post);
    });


    
  
  
    return (
      
      <List
        className="card"
        pagination={{ pageSize: 8 }}
        dataSource={data}
        itemLayout="vertical"
        size="large"
        renderItem={(item) => (
          <Card key={item.id}>
            <div className="title">
              <div
                className="title__img"
                style={{ backgroundColor: item.bgIconTitle }}
              >
                <img src={item.pathIconTitle} />
              </div>
              <p>{item.title}</p>
            </div>
            <div className="club-tags">
              <div className="tag">
                <img src="/src/images/categories/art.svg" />
                <p>Спортивні секції</p>
              </div>
            </div>
            <p className="description">{item.text}</p>
            <Rate />
            <div className="adress">
              <img src="/src/images/map/cluster.png" />
              <p>{item.place}</p>
            </div>

            <button className="more-info">
              <a href="/">Детальніше</a>
            </button>
          </Card>
          
        )}

      />
      
    );
  }
}

export default ClubsItem;
