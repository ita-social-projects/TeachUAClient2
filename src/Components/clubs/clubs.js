import React, { Component } from 'react'
import 'antd/dist/antd.css';
import "./clubs.scss";
import ClubsItem from "../clubs/clubsItem/clubsItem";

export class clubs extends Component {
  render() {
    return (
      <div className="clubs-wrapper" style={{ backgroundImage: "url(/src/Components/Background.png)" }}>
      <div className="clubs">
        <ClubsItem />
     </div>
    </div>
    )
  }
}

export default clubs

