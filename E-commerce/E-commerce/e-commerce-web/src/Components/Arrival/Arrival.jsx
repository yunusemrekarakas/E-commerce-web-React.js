import React from 'react'
import "./Arrival.css";
import image1 from  "../../Assets/arr_img1.jpg"
import image2 from  "../../Assets/arr_img2.jpg"
import image3 from  "../../Assets/arr_img3.jpg"
const Arrival = () => {
  
  return (
    <section className="arrival" id="arrival">
        <h1 className="heading"><span>new arrivals</span></h1>
        <div className="box-container">
            <div className="box">
                <div className="image">
                    <img src={image1}></img>
                </div>
                <div className="info">
                    <h3>smart tv</h3>
                    <div className="subİnfo">
                        <strong className="price">$1000/-<span>$1500/-</span></strong>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                    </div>
                </div>
                <div className="overlay">
                    <a href="" className="fas fa-heart"></a>
                    <a href="" className="fas fa-shopping-cart"></a>
                    <a href="" className="fas fa-search"></a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={image2}></img>
                </div>
                <div className="info">
                    <h3>smart tv</h3>
                    <div className="subİnfo">
                        <strong className="price">$1000/-<span>$1500/-</span></strong>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                    </div>
                </div>
                <div className="overlay">
                    <a href="" className="fas fa-heart"></a>
                    <a href="" className="fas fa-shopping-cart"></a>
                    <a href="" className="fas fa-search"></a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src={image3}></img>
                </div>
                <div className="info">
                    <h3>smart tv</h3>
                    <div className="subİnfo">
                        <strong className="price">$1000/-<span>$1500/-</span></strong>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                        </div>
                    </div>
                </div>
                <div className="overlay">
                    <a href=""  className="fas fa-heart"></a>
                    <a href=""  className="fas fa-shopping-cart"></a>
                    <a href=""  className="fas fa-search"></a>
                </div>
            </div>
        </div>

        
    </section>
  );
};

export default Arrival;
