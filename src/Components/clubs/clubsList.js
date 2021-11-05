import React from 'react'
import 'antd/dist/antd.css';
import "./clubsList.scss";
import ClubsListItem from "../clubs/clubsListItem/clubsListItem";
import {Pagination} from "antd";
class ClubsList extends React.Component {
  render() {
    return (
      <div>
        <ClubsListItem></ClubsListItem>
        <Pagination className="pagination"
                        hideOnSinglePage
                        showSizeChanger={false}
                        // onChange={onPageChange}
                        current={1}
                        pageSize={8}
                        total={50}
        />
      </div>
    );
  }
}

export default ClubsList;
