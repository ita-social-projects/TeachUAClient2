import React from "react";
import { List, Card, Rate } from "antd";
import "antd/dist/antd.css";
import "./clubsItem.scss";
import ClubsData from "../clubs.json";
import {
  getSitiesServise,
} from "../../../Services/clubList";

class ClubsItem extends React.Component {
  state={ 
    data:[],
    currentPage:1
  } 
  getData(){
    getSitiesServise(this.state.currentPage - 1).then((response) => { 
      response.data.content.map(element => {
        element.categories[0].urlLogo = element.categories[0].urlLogo.replace("/static","/src")}
      );
      this.setState({data:response.data.content})  
      console.log(this.state.data)
      console.log(this.state.currentPage)
  }).catch(function(e) {
    console.log(e);
  })
  }
  componentDidMount(){ 
    this.getData()
  }
    onChange = page => {
      this.setState({currentPage:page})  
      this.getData()
    }

  

  render() {
    const getShortContent = (content) => {
      const contentObject = JSON.parse(content);
      return contentObject.blocks[3].text
    }
    return (
      <List
        className="card"
        pagination={{ 
          pageSize: 8,
          total:75,
          onChange: this.onChange
         }}
        
        dataSource={this.state.data}
        itemLayout="vertical"
        size="large"
        
        renderItem={(item) => (
          <Card key={item.number}>
            <div className="title">
              <div className="title__img"
                 style={{ backgroundColor: item.categories[0].backgroundColor }} >
                 <img src={item.categories[0].urlLogo} /> 
              </div>
              <p>{item.name}</p>
            </div>
            <div className="club-tags">
              <div className="tag">
                <img src="/src/images/categories/art.svg" />
                <p>Спортивні секції</p>
              </div>
            </div>
            <p className="description">{getShortContent(item.description)}</p>
            <Rate />
            <div className="adress">
              <img src="/src/images/map/cluster.png" />
               <p>{item.locations[0].cityName}, {item.locations[0].address}</p> 
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
