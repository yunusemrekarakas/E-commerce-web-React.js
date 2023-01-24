import React from 'react'
import "./Footer.css"
import imageApp from "../../Assets/app.jpg"
import imagePlay from "../../Assets/play.jpg"
import imagePay from "../../Assets/pay.png"
const Footer = () => {
  return (
    <section className='Footer' >
           <div className="col">
                <h4>Contact</h4>
                <p><strong>Adress:</strong>İstanbul sultangazi 50.yıl Mahhalesi</p>
                <p><strong>Phone:</strong>217 5341 475</p>
                <p><strong>Hours:</strong>10.00-18.00 Mon-Sat</p>
                 <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                    </div>   
           </div>
            <div className="col col-1">
                <h4>Menu</h4>
                <a href="#">Home</a>
                <a href="#">Arrival</a>
                <a href="#">Featured</a>
                <a href="#">Gallery</a>
                <a href="#">Deal</a>
            </div>
            <div className="col col-1">
                <h4>My Account</h4>
                <a href="#">Sıgn In</a>
                <a href="#">View Cart</a>
                <a href="#">user</a>
                <a href="#">shopping cart</a>
                <a href="#">Help</a>
            </div>
            <div className="col">
                <h4>Install App</h4>
                <p>From app store or Google Play</p>
                <div className="row">
                    <img src={imageApp}></img>
                    <img src={imagePlay}></img>
                </div>
                <p>Secured payments Gateway</p>
                <img className="payment" src={imagePay}></img>
            </div>
            
    </section>
  )
}

export default Footer
