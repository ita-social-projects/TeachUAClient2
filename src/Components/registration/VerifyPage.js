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

  componentDidMount() {
    const verifyCode = this.getCode("code");
    verifyUser(verifyCode)
      .then((response) => {
        if (response.status === 200) {
          message.success({
            content: response.data.message,
            duration: 5,
            className: "custom-class-confirmation",
          });
        } else {
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
      });
  }
  render() {
    return (
      <div>
        fdghdg
      </div>
    );
  }
}
export default withRouter(VerifyPage) ;

VerifyPage.propTypes = {
  history: PropTypes.object,
};

