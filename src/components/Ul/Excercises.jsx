import React from "react";
import "../../Styles/exercises.css"
import lunges from "../../assets/img/lunges.png"
import yoga from "../../assets/img/yoga-pose.png"
import extended from "../../assets/img/extended.png"
const Exercises = () =>{
return(
<section>
    <div className="container exercise__container">
        <div className="exercise__top">
         <h2 className="section__title">Benefits of <span 
         className="highlights">Exercise</span></h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Consectetur ex, est optio distinctio veniam atque.</p>
        </div>

        <div className="exercise__wrapper">
            <div className="exercise__item">
                <span className="exercise__icon">
                    <img src={lunges } />
                </span>
                <div className="exercise__content">
                    <h4>Healthy Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicingelit. <br />   Quidem laudantium a, ad beatae repudiandae cumque.</p>
                </div>

            </div>

            <div className="exercise__item">
                <span className="exercise__icon">
                    <img src={yoga } />
                </span>
                <div className="exercise__content">
                    <h4>Increased Flexibility</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicingelit. <br />   Quidem laudantium a, ad beatae repudiandae cumque.</p>
                </div>

            </div>

            <div className="exercise__item">
                <span className="exercise__icon">
                    <img src={extended } />
                </span>
                <div className="exercise__content">
                    <h4>Reducing Blood Pressure</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicingelit. <br />   Quidem laudantium a, ad beatae repudiandae cumque.</p>
                </div>

            </div>

        </div>
    </div>
</section>
)
};
export default Exercises