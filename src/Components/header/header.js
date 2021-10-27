import React from 'react'
import Logo from '../header_img/logo.png'
import Caption from '../header_img/caption.svg'
import Plate from '../header_img/plate.svg'
import Toggle from '../header_img/toggle.svg'
import Lens from '../header_img/lens.svg'
import Flag from '../header_img/flag.svg'
import ProjectIcon from '../header_img/projectIcon.svg'
import NewsIcon from '../header_img/newsIcon.svg'
import Crown from '../header_img/crown.svg'
import SpeakUkrainian from '../header_img/speakUkrainian.svg'
import Project from '../header_img/project.svg'
import News from '../header_img/news.svg'
import Workshop from '../header_img/workshop.svg'
import Challenge from '../header_img/challenge.svg'
import Placeholder from '../header_img/placeholder.svg'
import Button from '../header_img/button.svg'
import Location from '../header_img/location.svg'
import City from '../header_img/city.svg'
import './header.css'


function header() {
    return (
        <div className='Header'>
            <div className='Heading'>
                <div>
                    <img src={Logo} alt='logo'/>
                </div>

                <nav className='Menu'>
                    <a>
                        <img style={{margin: 2}} src={ProjectIcon}/>
                        <img style={{margin: 2}} src={Workshop}/>
                    </a>
                    <a>
                        <img style={{margin: 2}} src={Crown}/>
                        <img style={{margin: 2}} src={Challenge}/>
                    </a>
                    <a>
                        <img style={{margin: 2}} src={NewsIcon}/>
                        <img style={{margin: 2}} src={News}/>
                    </a>
                    <a>
                        <img style={{margin: 2}} src={ProjectIcon}/>
                        <img style={{margin: 2}} src={Project}/></a>
                    <a>
                        <img style={{margin: 2}} src={Flag}/>
                        <img style={{margin: 2}} src={SpeakUkrainian}/>
                    </a>
                </nav>
                <img style={{margin: 5, width: 15, display: 'inline'}} src={Location}/>
                <img style={{margin: 5, width: 34, display: 'inline'}} src={City}/>
                <img style={{margin: 5, width: 170, display: 'inline'}} src={Button}/>
            </div>

            <div className='Heading1'>
                <div className='caption' style={{width: 559, display: 'inline'}}>
                    <img src={Caption} alt='caption'/>
                </div>
                <div className='search'>
   <span className='SearchBox'>
       <div className='SearchField'>
   <img style={{width: 152, display: 'inline'}} src={Placeholder}/>
   <img style={{margin: 5, top: 5, width: 20, display: 'inline'}} src={Lens}/>
        </div>
   <img style={{width: 220, display: 'inline'}} src={Plate}/>
   </span>
                    <img style={{width: 20, display: 'inline'}} className='SearchIcon' src={Toggle}/>
                </div>
            </div>
        </div>
    )
}

export default header
