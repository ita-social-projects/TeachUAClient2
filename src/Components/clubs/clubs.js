import React from 'react'
import 'antd/dist/antd.css';
import "./clubs.scss";
import ClubsItem from "../clubs/clubsItem/clubsItem";
import { LeftSearch } from '../left_side_search/left_side_search';


class Clubs extends React.Component {
  render() {
    return (
      <div className="clubs-wrapper">
        <div>
          <LeftSearch />
        </div>
        <div className="clubs">
          <ClubsItem></ClubsItem>
       </div>
      </div>
    );
  }
}

export default Clubs;
