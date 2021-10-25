import React from 'react'
import Background from '../header_img/background.svg'
import Background1 from '../header_img/background.png'
import Logo from '../header_img/logo.png'
import Caption from '../header_img/caption.png'
import Caption1 from '../header_img/caption.svg'
import Search1 from '../header_img/Plate.svg'
import Search3 from '../header_img/settingIcon.svg'
import V from '../header_img/Vector.svg'
import V1 from '../header_img/Vector1.svg'
import V2 from '../header_img/Vector2.svg'
import V3 from '../header_img/Vector3.svg'
import V4 from '../header_img/Vector4.svg'
import V5 from '../header_img/Vector5.svg'
import P from '../header_img/Projects.svg'
import P1 from '../header_img/Projects1.svg'
import P2 from '../header_img/Projects2.svg'
import P3 from '../header_img/Projects3.svg'
import C from '../header_img/Challenge.svg'
import Search4 from '../header_img/Search4.svg'
import Button from '../header_img/button.svg'
import Location from '../header_img/Location.svg'
import City from '../header_img/City.svg'
import ProperBackground from '../header_img/ProperBackground.svg'


function header() {
    return (
        <div  className='Header'>
        <div className='Heading'>
<div>
<img src={Logo} alt='logo'/>
</div>
<nav className='Menu'>
    <a>
    <img style={{margin:2}} src={V2} />
    <img style={{margin:2}} src={P3} />
    </a>
    <a>
    <img style={{margin:2}} src={V4} />
    <img style={{margin:2}} src={C} />  
    </a>
    <a>
   <img style={{margin:2}} src={V3} /> 
   <img style={{margin:2}} src={P2} />
    </a>
    <a>
    <img style={{margin:2}} src={V5} />
    <img style={{margin:2}} src={P1} /></a>
    <a>
    <img style={{margin:2}} src={V1} />
    <img style={{margin:2}} src={P} />
    </a>
</nav>
<img style={{margin:5, width:15 , display:'inline'}} src={Location} />
<img style={{margin:5, width:34, display:'inline'}}src={City} /> 
<img style={{margin:5, width:170, display:'inline'}} src={Button} /> 
</div>

<div className='Heading1'>
    <div className='caption' style={{width:559, display:'inline'}}>
    <img  src={Caption1} alt='caption' />
    </div>
    <div className='search'>
   <span className='SearchBox'>
       <div>
   <img style={{width:252, display:'inline'}}  src={Search4} />
   <img style={{margin:5, top: 5, width:20, display:'inline'}} src={V} />
        </div>
   <img style={{width:296, display:'inline'}} src={Search1} />
   </span>
   <img style={{width:20, display:'inline'}} className='SearchIcon' src={Search3} />  
      </div>
</div>
        </div>
    )
}

export default header
