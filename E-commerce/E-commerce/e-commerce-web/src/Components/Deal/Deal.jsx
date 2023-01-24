import React from 'react'
import "./Deal.css"
import deal1 from "../../Assets/deal1.jpg"
import deal2 from "../../Assets/deal2.jpg"
const Deal = () => {
  return (
    <section className='deal' id='deal'>
           <h1 className='heading'><span>best deal</span></h1> 
           <div className="box-container">
            <div className="box">
                <img src={deal1}></img>
                <div className="content">
                    <h3>latest laptop</h3>
                    <p>upto 25% off on first purchase</p>
                    <a href="#"><button className="btn">explore</button></a>
                </div>
            </div>
            <div className="box">
                <img src={deal2}></img>
                <div className="content">
                    <h3>new headphpone</h3>
                    <p>upto 25% off on first purchase</p>
                    <a href="#"><button className="btn">explore</button></a>
                </div>
            </div>
           </div>
           <div className="icons-container">
             <div className="icons">
                <i className="fas fa-shipping-fast"></i>
                <h3>fast delivery</h3>
                <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. </p>
             </div>
             <div className="icons">
                <i className="fas fa-user-clock"></i>
                <h3>24 x 7 support</h3>
                <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. </p>
             </div>
             <div className="icons">
                <i className="fas fa-box"></i>
                <h3>10 days replacement</h3>
                <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. </p>
             </div>
             <div className="icons">
                <i className="fas fa-money-check-alt"></i>
                <h3>easy payments</h3>
                <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. </p>
             </div>
           </div>
    </section>
  )
}

export default Deal
