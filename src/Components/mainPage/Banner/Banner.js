import React from "react"
import './Banner.scss'
import BannerI from '../../../../public/static/images/about/banner.png'

class Banner extends React.Component {


    render() {
        return (
            <div className="banner">
                <img src={BannerI} alt='twitter'/>
            </div>
        )
    }

}

export default Banner