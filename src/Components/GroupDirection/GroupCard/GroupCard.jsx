import React from "react";
import "./GroupCard.scss";

class GroupCard extends React.Component {
  render() {
    return (
      <div className="GroupCard">
        <div className="GroupCard__wrapper">
          <div className="categories-background">
            <img src={this.props.post.url} alt=""/>
           </div>
          <h5>{this.props.post.article}</h5>
          <p>{this.props.post.text}</p>
          <h6><a>Переглянути</a></h6>
        </div>
      </div>
    );
  }
}

export default GroupCard;
