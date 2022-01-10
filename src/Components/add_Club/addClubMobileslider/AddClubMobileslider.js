import React from "react";
import PropTypes from 'prop-types';
import { Steps} from 'antd';
import  './addClubMobileslider.modules.scss'

const { Step } = Steps;

class AddClubMobileslider extends React.Component {
    render() {
        return (
            <Steps
                className="steps__items_small"
                //progressDot={false}
                current={this.props.current}
            //direction="vertical"
            >
                <Step id='add_club_mainIfo' style={{  display: this.props.current == 0 ? "block" : "none" }} title="Основна інформація" />
                <Step style={{ display: (this.props.current == 0 || this.props.current == 1 || this.props.current == 2) ? "block" : "none", textAlign:(this.props.current == 0)?"right":"left" }} title="Контакти" />
                <Step style={{ display: (this.props.current == 1 || this.props.current == 2) ? "block" : "none" }} title="Опис" />
                {/*steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))*/}
            </Steps>
        )
    }
}

AddClubMobileslider.propTypes = {
    current: PropTypes.number,
   
};

export default AddClubMobileslider