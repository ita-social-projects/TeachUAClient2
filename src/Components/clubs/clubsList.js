import React from 'react'
import 'antd/dist/antd.css';
import "./clubsList.scss";
import ClubsListItem from "../clubs/clubsListItem/clubsListItem";

class ClubsList extends React.Component {
  render() {
    return (
      <div>
        <ClubsListItem></ClubsListItem>
      </div>
    );
  }
}

export default ClubsList;
