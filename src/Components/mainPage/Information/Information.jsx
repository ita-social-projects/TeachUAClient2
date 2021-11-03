import React from "react";
import "./Information.scss";
import PropTypes from 'prop-types';

class Information extends React.Component {
    render() {
        return (
            <div className="Information">
                <div className="Information__text">
                    <h2>{this.props.information.article}</h2>
                    <p>{this.props.information.text}</p>
                    <div className="Information__btn">{this.props.information.btnText}</div>
                </div>
                <div className="Information__img" style={{backgroundImage: this.props.information.url}}></div>
                {/*move backgroundImage into scss */}
            </div>
        );
    }
}
Information.propTypes = {
    information: PropTypes.string
};
export default Information;
