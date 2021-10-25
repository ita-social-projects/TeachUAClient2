import React from "react";
import "./NewsCard.scss";

class NewsCard extends React.Component {
  render() {
    return (
      <div className="newsCard">
        <div className="newsCard__wrapper">
          <img src={this.props.props.url} alt="" />
          <p>{this.props.props.date}</p>
          <h5>{this.props.props.article}</h5>
          <p>{this.props.props.text}</p>
          <p><a>Переглянути</a></p>
        </div>
      </div>
    );
  }
}

export default NewsCard;
