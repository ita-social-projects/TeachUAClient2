import React from "react";
import { List, Card, Rate } from "antd";
import "antd/dist/antd.css";
import "./clubsItem.scss";
import ClubsData from "../clubs.json";
import {
  getSitiesServise,
} from "../../../Services/clubList";

class ClubsItem extends React.Component {
  render() {
    const data = [];
    const getData = () => {
      getSitiesServise().then((response) => {
        response.data.content.map((post) => {
          data.push(post);
      });
      console.log(data)
    })};
    getData()
   
    
    return (
      <List
        className="card"
        pagination={{ pageSize: 8 }}
        dataSource={data}
        itemLayout="vertical"
        size="large"
        renderItem={(item) => (
          <Card key="{item.id}">
            <div className="title">
              <div
                className="title__img"
                // style={{ backgroundColor: item.bgIconTitle }}
              >
                {/* <img src={item.pathIconTitle} /> */}
              </div>
              <p>{item.name}</p>
            </div>
            <div className="club-tags">
              <div className="tag">
                <img src="/src/images/categories/art.svg" />
                <p>Спортивні секції</p>
              </div>
            </div>
            <p className="description">{item.description}</p>
            <Rate />
            <div className="adress">
              <img src="/src/images/map/cluster.png" />
              <p>{item.locations}</p>
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
