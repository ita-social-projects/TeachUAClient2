import React from 'react'
import 'antd/dist/antd.css';
import "./clubs.scss";
import ClubsItem from "../clubs/clubsItem/clubsItem";
class Clubs extends React.Component {
  render() {
    return (
      <div className="clubs-wrapper" style={{ backgroundImage: "url(/src/Components/Background.png)" }}>
        <div className="clubs">
          <ClubsItem></ClubsItem>
       </div>
      </div>
    );
  }
}

export default Clubs;
