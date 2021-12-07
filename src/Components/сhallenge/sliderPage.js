import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Marathons from './MarathonContext';





export class SliderPage extends Component {
    state = {card: null};
    componentDidMount(){
        let pathUrl = this.props.match.params.pathUrl;
        this.setState({card:Marathons.find(x=>{ return pathUrl === x.pathUrl}) }, ()=>{console.log(this.state.card)})   
    
        console.log(this.props.match.params.pathUrl)
        
    }
    render() {
        
        
   
        return (
            <div >
             <h1>{this.state.card && this.state.card.name}</h1>
             <h1></h1>
            </div>
        )
    }
 

}
SliderPage.propTypes = {
   
    match: PropTypes.shape({
        params: PropTypes.shape({
          pathUrl: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    
};
export default SliderPage
