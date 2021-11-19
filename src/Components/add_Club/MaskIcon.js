import React from "react";
import PropTypes from 'prop-types';

class MaskIcon extends React.Component {
    render() {
        return (
            <div className="icon"
                style={{
                    backgroundColor: this.maskColor,
                    WebkitMask: `url(${process.env.PUBLIC_URL + this.iconUrl}) no-repeat center / contain`
                }} />
        )
    }
}

MaskIcon.PropTypes = {
    maskColor: PropTypes.any,
    iconUrl: PropTypes.any
}
export default MaskIcon;
