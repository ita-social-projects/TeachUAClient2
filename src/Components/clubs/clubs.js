import React from "react";
import "antd/dist/antd.css";
import "./clubs.scss";
import ClubsItem from "../clubs/clubsItem/clubsItem";
import { LeftSearch } from "../left_side_search/left_side_search";
import  ShowAdvancedSearchContext from "../context";


class Clubs extends React.Component {
  render() {
    
    return (
 
      <div className="clubs-wrapper">
        
        <ShowAdvancedSearchContext.Consumer>
          {(value) => (
            <div>

              {value.isSearchFilterEnabled ? (
                <div>
                  <LeftSearch />{" "}
                </div>
              ) : null}{" "}
            </div>
          )}
        </ShowAdvancedSearchContext.Consumer>

      <div className="clubs-wrapper" style={{ backgroundImage: "url(/src/Components/Background.png)" }}>
        
      
      
        <div className="clubs">
          <ClubsItem ></ClubsItem> 
        </div>
                
      </div>

      </div>
    );
  }
}




export default Clubs

