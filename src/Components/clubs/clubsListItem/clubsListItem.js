import React from 'react'
import 'antd/dist/antd.css';
import "./clubsListItem.scss";
import ClubsItem from "../clubsListItem/clubsItem/clubsItem";

class ClubsListItem extends React.Component {
  render() {
    return (
      <div className="club-list">
          <ClubsItem></ClubsItem>
          <ClubsItem></ClubsItem>
          <ClubsItem></ClubsItem>
          <ClubsItem></ClubsItem>
          <ClubsItem></ClubsItem>
          <ClubsItem></ClubsItem>
          <ClubsItem></ClubsItem>
          <ClubsItem></ClubsItem>
      </div>
    );
  }
}

export default ClubsListItem;
