import React, { Component } from 'react'
import Slider from './slider'
import challengeUADoc from './challengeContext'
import './challengeUA.scss'






export class challengeUA extends Component {
    render() {
        return (
            <div>
               <Slider item={challengeUADoc}/> 
               
            </div>
        )
    }
}

export default challengeUA
