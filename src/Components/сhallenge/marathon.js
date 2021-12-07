import React, { Component } from 'react'
import Slider from './slider'
import MarathonDoc from './MarathonContext'
import '../сhallenge/marathon.scss'






export class Marathon extends Component {
    render() {
        return (
            <div>
               <Slider item={MarathonDoc}/> 
               
            </div>
        )
    }
}

export default Marathon
