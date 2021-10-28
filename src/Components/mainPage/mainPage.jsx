import React from "react";
import "./mainPage.scss";

class mainPage extends React.Component {
    render() {
        return (
            <div className="Information">
                <div className="Information__text">
                    <h2>{this.props.props.article}</h2>
                    <p>{this.props.props.text}</p>
                    <div className="Information__btn">{this.props.props.btnText}</div>
                </div>
                <div className="Information__img" style={{backgroundImage: this.props.props.url}}></div>
                {/*move backgroundImage into scss */}
            </div>
        );
    }
}

export default mainPage;
