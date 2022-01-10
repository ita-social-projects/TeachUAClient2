import React from "react";
import { message } from "antd";
import { verifyUser } from "../../Services/verify";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

class VerifyPage extends React.Component {
  getCode = (value) => {
    const params = new URLSearchParams(location.search);
    return params.get(value);
  };
  goTo=()=>{
    this.props.history.push('/')
  }
  cluk = () => {
    console.log(this.getCode);
  };
  componentDidMount() {
    const verifyCode = this.getCode("code");
    console.log(verifyCode);
    verifyUser(verifyCode)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          message.success({
            content: response.data.message,
            duration: 5,
            className: "custom-class-confirmation",
          }); /*
          if (verifyCode !== undefined) {
            window.location = "http://localhost:3000";
          }*/
        } else {
          console.log(response)
          message.warning(response.data.message);
        }
      })
      .catch((error) => {
        message.warning({
          content: error.response.data.message,
          duration: 5,
          className: "custom-class-confirmation",
        });
      }).then(()=>{
        this.goTo();
        /*setTimeout(()=>{
          
          window.location = "http://localhost:3000";
        },5000)*/
        
      });
  }
  render() {
    /*
    const verifyCode = this.getCode("code");
    console.log(verifyCode);
    verifyUser(verifyCode).then((response) => {
        console.log(response)
      if (response.status === 200) {
        message.success({
          content: response.data.message,
          duration: 5,
          className: "custom-class-confirmation",
        });
        if (verifyCode !== undefined) {
          window.location = "http://localhost:3000";
        }
      } /*else {
        message.warning(response.data.message);
      }*/
    /*}).catch((response)=>{
        console.log(response)
    message.warning(response.message);
    });*/
    return (
      <div>
        fdghdg
        <button onClick={this.cluk}>clik</button>
      </div>
    );
  }
}
export default withRouter(VerifyPage) ;

VerifyPage.propTypes = {
  history: PropTypes.object,
};

