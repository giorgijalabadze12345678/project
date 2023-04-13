import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../Styles/hero.css";


const Hero = () =>{
    return(
  <section>
    <div className="container">
        <div className="hero__weapper">



            <div className="hero__content">
                <h2 className="section__title">
        <h2>Exercise is the key to healthy</h2>  
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> assumenda molestiae officia! Omnis, illo et.</p>
</h2>
          <div className="hero__btns">
          <button className="register__btn">get startet</button>
          </div>
          </div>   


        <div className="hero__img">
        <div className="hero__img-wrapper">
            <div className="box-1">
                <div className="box-2">
                    <div className="box-3">
                        <div className="box__img">
                            <img src={heroImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
<div className="heart__rate">
    <h5>Heart rate</h5>
    <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOpJREFUSEvFleERwiAMhV830UnUSdRJ1EnUSXSTuone4wKHNKWhl17zp1yh70teoHRYOLqF9bEaYA/gCIDPj1T5BPCQ8QnArjKfjNEqeMmHmntveUmwFkzgliU1sKgmbm3XVSBhfV4BsyLAI87RzhxwB0BvPYJWEfJXwddDWTTYq0MJ6AFsnCDcedsS4GmRWsEFAHeAR9CesKXLc+BRRcpeA7AH3Kpze5G8jzZoJ3kuZCCuVRDBrRBVvAbgnBUyKj4FsECq4hZADTIpbgVoEJN4CyCHcBx+A5ZovTLZ+HjDWfTXu5NN2VkW/QASnyoZyaY7HQAAAABJRU5ErkJggg=="/></span>
    <h5>2567 BPM</h5>
</div>
 
<div className="gym__location">
    <span></span>
   
</div>

<div className="dumble__icon">
<img src={dumbleIcon} />
</div>
        </div>
        </div>
    </div>
  </section>
    )
}
export default Hero