import React from "react";
import Registration from "../../registration/Registration";


class HeadeClas extends React.Component {
    state={
        isRegistaration: false,
        
    };
    toggleRegistaration = () => {
        this.setState(state => ({ isRegistaration: !state.isRegistaration }))
    }
    
    render() {
        return (
            <>
                <button onClick={()=>{this.toggleRegistaration(),false}}> Open</button>
                {this.state.isRegistaration &&

                    <Registration onClose={this.toggleRegistaration} />

                }
            </>



        )
    }
}

export default HeadeClas;