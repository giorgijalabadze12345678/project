import React, { useEffect } from "react";
import "../../Styles/header.css"
import logo from '../../assets/img/dumble.png'


const nav__links =[
   { path:'#',
    display:"Home"
},

{ path:'shedule',
display:"scedule"
},

{ path:'#',
display:"classes"
},
{ path:'pricing',
display:"pricing"
},


]

const Header = () =>{
    return(
<header className="header">
<div className="container">
    <div className="nav__wrapper">




        <div className="logo">
            <div className="logo__img"><img src={logo}/></div>
                <h2>fitboy</h2>
        </div>



        <div className="navigation">
            <ul className="menu">
                {
                    nav__links.map(item=>(
                        <li className="nav__item "><a href={item.path}>{item.display}</a></li>
                    ))
                }
            </ul>
        </div>

<div className="className">
    <button className="register__btn">register</button>
</div>
    </div>
</div>
    
    
    
    </header>



    )
}
export default Header;