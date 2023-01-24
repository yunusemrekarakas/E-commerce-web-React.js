import React from 'react'
import "./Feature.css"
import imageBig from "../../Assets/watch1.jpg"
import image1 from "../../Assets/watch1.jpg"
import image2 from "../../Assets/watch1.jpg"
import image3 from "../../Assets/watch1.jpg"
const Feature = () => {
  return (
    <section className="feature" id="feature">
        <h1 className="heading"><span>featured product</span></h1>
        <div className="row">
            <div className="image-container">
                <div className="big-image">
                    <img src={imageBig}></img>
                </div>
                <div className="small-image">
                    <img className="image-active" src={imageBig}></img>
                    <img src={image1}></img>
                    <img src={image2}></img>
                    <img src={image3}></img>
                </div>
            </div>
            <div className="content">
                <h3>smart watches</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>(500+)reviews</span>
                </div>
                <p>lorem impu dolar lorem impus dolar lorem impu dolar lorem impus dolar lorem impu dolar lorem impus dolar</p>
                <strong className="price">$1000 <span>#1500</span></strong>
                <a href="#"><button className="btn">buy now</button></a>
            </div>
        </div>
    </section>
  )
}

export default Feature
