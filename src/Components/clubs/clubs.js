import React from 'react'
import 'antd/dist/antd.css';
import "./clubs.scss";
import ClubsItem from "../clubs/clubsItem/clubsItem";
import { LeftSearch } from '../left_side_search/left_side_search';


class Clubs extends React.Component {

  state = {
    show: true,
  }

toggleSideSearch = () => {
  this.setState({ show: !this.state.show });
};
render() {
  console.log(this.props)
  return (
    <div className="clubs-wrapper">
      {this.state.show ?
      <div>
       <LeftSearch />
      </div> : null}

      <div className="clubs">
        <ClubsItem></ClubsItem>
      </div>
    </div>
  );
}
}

export default Clubs;
