import React from "react";
import PropTypes from 'prop-types';
import { Steps} from 'antd';
import './add_Club_Mobileslider.modules.scss'

const { Step } = Steps;

class Add_Club_Mobileslider extends React.Component {
    render() {
        return (
            <Steps
                className="steps__items_small"
                //progressDot={false}
                current={this.props.current}
            //direction="vertical"
            >
                <Step style={{ display: this.props.current == 0 ? "block" : "none" }} title="Основна інформація" />
                <Step style={{ display: (this.props.current == 0 || this.props.current == 1 || this.props.current == 2) ? "block" : "none" }} title="Контакти" />
                <Step style={{ display: (this.props.current == 1 || this.props.current == 2) ? "block" : "none" }} title="Опис" />
                {/*steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))*/}
            </Steps>
        )
    }
}

Add_Club_Mobileslider.propTypes = {
    current: PropTypes.number,
   
};

export default Add_Club_Mobileslider