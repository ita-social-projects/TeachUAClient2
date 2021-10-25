import React from "react";
import "./News.scss";
import NewsCard from "./NewsCard/NewsCard";

class News extends React.Component {
  render() {
    return (
      <div>
        <h1>Новини</h1>
          <div className="news">
            <NewsCard props={{date:"12.01.2021",article:"Опис матеріалу",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",url:"./static/images/news/newsCard_1.png"}}></NewsCard>
            <NewsCard props={{date:"12.01.2021",article:"Опис матеріалу",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",url:"./static/images/news/newsCard_2.png"}}></NewsCard>
            <NewsCard props={{date:"12.01.2021",article:"Опис матеріалу",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",url:"./static/images/news/newsCard_3.png"}}></NewsCard>
          </div>
      </div>
    );
  }
}

export default News;
