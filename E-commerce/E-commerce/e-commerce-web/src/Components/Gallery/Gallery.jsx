import React from "react"
import "./Gallery.css"
import image1 from "../../Assets/g_img1.jpg"
import image2 from "../../Assets/g_img2.jpg"
import image3 from "../../Assets/g_img3.jpg"
import image4 from "../../Assets/g_img4.jpg"
import image5 from "../../Assets/g_img5.jpg"
import image6 from "../../Assets/g_img6.jpg"
import image7 from "../../Assets/g_img7.jpg"
import image8 from "../../Assets/g_img8.jpg"
import image9 from "../../Assets/g_img9.jpg"
const Gallery = () => {
    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("box");
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }
    
    // Show filtered elements
    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }
    
    // Hide elements that are not selected
    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        <span> product gallery </span>
      </h1>
      <ul className="controls">
        <li onClick={filterSelection('all')} className="btn button-active">
          all
        </li>
        <li onClick={filterSelection('phone')} className="btn">phone</li>
        <li className="btn">laptop</li>
        <li className="btn">headphone</li>
        <li className="btn">shoes</li>
      </ul>
      <div className="image-container">
        <div className="box phone">
          <div className="image">
            <img src={image1}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image2}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image3}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image4}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image5}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image6}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image7}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image8}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={image9}></img>
          </div>
          <div className="info">
            <h3>smartphones</h3>
            <div className="subİnfo">
              <strong className="price">$1000</strong>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
