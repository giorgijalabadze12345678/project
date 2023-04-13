import React from "react";
import "../../Styles/start.css"
import trainerImg from "../../assets/img/trainer.png"
const Start = () =>{
   return (
<section>

<div className="container">
    <div className="start__wrapper">
        <div className="start__img">
            <img src={trainerImg}  />
        </div>
        <div className="start__content">
            <h2 className="h2 section__title">
                ready ro make a change?
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum necessitatibus suscipit reprehenderit illum! Ex perferendis eum repellendus totam, deserun ipsum quasi<br/> provident iure voluptate aperiam!</p>
            <button className="register__btn">Get Started</button>
        </div>
    </div>
</div>

</section>
   )
}

export default Start;