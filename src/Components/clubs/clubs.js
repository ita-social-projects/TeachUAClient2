import React from 'react'
import 'antd/dist/antd.css';
import "./clubs.scss";
import ClubsItem from "../clubs/clubsItem/clubsItem";
// import UserContext from '../context';


class Clubs extends React.Component {
  
  render() {
    console.log(this.context);
    
    return (
      
      // <UserContext.Consumer>
      //   {value =><h1>{value}</h1>}
      <div className="clubs-wrapper">
        <div className="clubs">
          <ClubsItem />
          
       </div>
      </div>

      // </UserContext.Consumer> 
    );
  }
}

const WithContext = (MyComponent) => {
  return (props) => (
      <UserContext.Consumer>
           {value =>  <MyComponent {...props} context={value} />}
      </UserContext.Consumer>
  )
}


export default  WithContext(Clubs);
