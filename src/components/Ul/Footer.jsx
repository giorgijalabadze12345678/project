import React from "react";
import "../../Styles/footer.css"
import logo from "../../assets/img/dumble.png"
const Footer = () =>{
return(
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">

                

                 
        <div className="logo">
            <div className="logo__img"><img src={logo}/></div>
                <h2>fitboy</h2>

            
        </div>   

        <div className="footer__box">
            <h4 className="footer__title">company</h4>
            <ul className="footer__links">
<li><a href="#"/>Our program</li>
<li><a href="#"/>Our plan </li>
<li><a href="#"/>become a member</li>

            </ul>
        </div>

        <div className="footer__box">
            <h4 className="footer__title">Quick links</h4>
            <ul className="footer__links">
<li><a href="#"/>About us</li>
<li><a href="#"/>Contact us </li>
<li><a href="#"/>support us </li>
            </ul>

           </div> 

           <div className="footer__box">
            <h4 className="footer__title">Quick links</h4>
            <ul className="footer__links">
<li><a href="#"/>About us</li>
<li><a href="#"/>Contact us </li>
<li><a href="#"/>support us </li>
            </ul>

           </div>  

          
                </div>
                </div>
        
    </footer>
)
}
export default Footer