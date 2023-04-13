import React from "react";
import "../../Styles/pricing.css"
import cheks from "../../assets/img/cheks.png"
const Pricing = () =>{
  return  (
    <section>
    <div className="container">
        <div className="pricing__top">
            <h2 className="section__title">Gym pricing</h2>
            <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Quas, sed <br/>fuga! Ipsum eveniet odit liquam.</p>
        </div>


        <div className="pricing__wrapper">
            <div className="pricing__item ">
                <div className="pricing__card-top">
                    <h2 className="section__title">Regular Member</h2>
                    <h2 className="pricing">$50<span>/month</span></h2>
                </div>


                <div className="services">
                    <ul>
                        <li><span><img src={cheks} /></span>Unlimited access to th gym</li>
                        <li><span><img src={cheks} /></span>custumer support </li>
                        <li><span><img src={cheks} /></span>personal trainer </li>
                        <li><span><img src={cheks} /></span>standart options </li>
                        <li><span><img src={cheks} /></span>5 clasess per week </li>
                    </ul>
                    <button className="register__btn">Join Now </button>
                </div>
            </div>
            <div className="pricing__item  pricing__item-02">
                <div className="pricing__card-top">
                    <h2 className="section__title">starndart Member</h2>
                    <h2 className="pricing">$100<span>/month</span></h2>
                </div>


                <div className="services">
                    <ul>
                        <li><span><img src={cheks} /></span>Unlimited access to th gym</li>
                        <li><span><img src={cheks} /></span>custumer support </li>
                        <li><span><img src={cheks} /></span>personal trainer </li>
                        <li><span><img src={cheks} /></span>standart options </li>
                        <li><span><img src={cheks} /></span>5 clasess per week </li>
                    </ul>
                    <button className="register__btn">Join Now </button>
                </div>
            </div>
            <div className="pricing__item">
                <div className="pricing__card-top">
                    <h2 className="section__title">premium Member</h2>
                    <h2 className="pricing">$150<span>/month</span></h2>
                </div>


                <div className="services">
                    <ul>
                        <li><span><img src={cheks} /></span>Unlimited access to th gym</li>
                        <li><span><img src={cheks} /></span>custumer support </li>
                        <li><span><img src={cheks} /></span>personal trainer </li>
                        <li><span><img src={cheks} /></span>standart options </li>
                        <li><span><img src={cheks} /></span>5 clasess per week </li>
                    </ul>
                    <button className="register__btn">Join Now </button>
                </div>
            </div>
        </div>
    </div>
</section>
)
}




export default Pricing