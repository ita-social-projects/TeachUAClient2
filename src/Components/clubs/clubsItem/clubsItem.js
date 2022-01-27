import React from "react";
import { List, Card, Rate, Tag } from "antd";
import "antd/dist/antd.css";
import "./clubsItem.scss";
import { getSitiesServise } from "../../../Services/clubList";
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

class ClubsItem extends React.Component {
  state = {
    data: [],
    currentPage: 1,
    totalElements: 0,
  };
  getData() {
    getSitiesServise(this.state.currentPage - 1)
      .then((response) => {
        this.setState({ dataTags: "" });
        response.data.content.map((element) => {
          let categoriesChildLength = Object.keys(element.categories).length;
          for (let i = 0; i < categoriesChildLength; i++) {
            element.categories[i].urlLogo = element.categories[
              i
            ].urlLogo.replace("/static", "/src");
          }
        });

        this.setState({
          data: response.data.content,
          totalElements: response.data.totalElements,
        });
      })
      .catch(function (e) {
        console.log(e);
      });
  }
  componentDidMount() {
    this.getData();
  }
  onChange = (page) => {
    this.setState({ currentPage: page }, () => this.getData());
  };

  render() {
    const getShortContent = (content) => {
      const contentObject = JSON.parse(content);
      let text = "";
      contentObject.blocks.forEach((element) => {
        if (element.text.trim() !== "") {
          text = element.text;
        }
      });
      return text;
    };

    return (
      <List
        className="card"
        pagination={{
          pageSize: 8,
          total: this.state.totalElements,
          onChange: this.onChange,
        }}
        dataSource={this.state.data}
        itemLayout="vertical"
        size="large"
        renderItem={(item) => (
          <Card key={item.number}>
            <div className="title">
              <div
                className="title__img"
                style={{ backgroundColor: item.categories[0].backgroundColor }}
              >
                <img src={item.categories[0].urlLogo} />
              </div>
              <p>{item.name}</p>
            </div>

            <div className="tags-wrapper">
              <div className="tags-wrapper__tags">
                <List
                  className="tag"
                  dataSource={
                   item.categories.length < 2 ? [item.categories[0]] : [item.categories[0],item.categories[1]]
                  }
                  itemLayout="vertical"
                  size="large"
                  renderItem={(category) => (
                    <Tag
                      icon={<img src={category.urlLogo} />}
                      color={category.tagBackgroundColor}
                    >
                      <p
                        className="tagName"
                        style={{ color: category.tagTextColor }}
                      >
                        {category.name}
                      </p>
                    </Tag>
                  )}
                />
              </div>
              <div className="tags-wrapper__count">
                    {item.categories.length > 2  ? <p>І ще {item.categories.length-2}...</p> : <p></p>}
              </div>
            </div>
            <p className="description">{getShortContent(item.description)}</p>
            <Rate />
            <div className="adress">
              <img src="/src/images/map/cluster.png" />
              <p>
                {item.locations[0].cityName}, {item.locations[0].address}
              </p>
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
