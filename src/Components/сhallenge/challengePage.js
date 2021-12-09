import React, { Component } from "react";
import PropTypes from "prop-types";
import Marathons from "./challengeContext";

export class challengePage extends Component {
  state = { card: null };
  componentDidMount() {
    let pathUrl = this.props.match.params.pathUrl;
    this.setState(
      {
        card: Marathons.find((x) => {
          return pathUrl === x.pathUrl;
        }),
      }
    );
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <div>{this.state.card && this.state.card.name}</div>

            <div>{this.state.card && this.state.card.subheader}</div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${this.state.card && this.state.card.text}`,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${this.state.card && this.state.card.text2}`,
              }}
            />
          </div>
          <div>{this.state.card && this.state.card.taskTitle}</div>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${this.state.card && this.state.card.task}`,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
challengePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pathUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default challengePage;
