import React, { useState } from 'react'
import "./Hero.css";
import LeftArrow from  "../../Assets/leftArrow.png"
import RightArrow from  "../../Assets/rightArrow.png"
import {sliderData} from "../../Data/sliderData"
const Hero = () => {
  const [selected,setSelected]=useState(0);
  const tlenght=sliderData.length;
  return (
    <section className="home" id="home">
        <div className="home-slider">
            <div className="item">
              <img src={sliderData[selected].image} alt=""></img>
              <div className="content">
                <h3>heavy discounts</h3>
                <p>Lorem impus dolor sit amet consectetur elit.se,neqwu</p>
                <a className="" href="#"><button className="btn">discover</button></a>
              </div>
            </div>
            <div className="arrows">
                <img className="left"
                 onClick={()=>{
                  selected=== 0
                  ?setSelected(tlenght-1)
                  :setSelected((prev)=>prev-1);
              }}
                src={LeftArrow}/>
                <img className="right" onClick={()=>{
                    selected===tlenght-1 
                    ? setSelected(0) 
                    :setSelected((prev)=>prev+1);
                }}
                src={RightArrow}/>
            </div>
        </div>
        
    </section>
  );
};

export default Hero;
