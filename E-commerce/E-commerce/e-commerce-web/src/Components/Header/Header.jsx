import React from "react";
import "./Header.css";
const Header = () => {
  function myFunction() {
    var x = document.getElementById("navbarBar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <header>
      <div className="header-1">
        <a href="" className="logo">
          <i className="fas fa-shopping-bag"></i> Shopping
        </a>
        <div className="form-container">
          <form action="">
            <input
              type="search"
              placeholder="search product"
              id="search"
            ></input>
            <label for="search" className="fas fa-search"></label>
          </form>
        </div>
      </div>
      <div className="header-2">
        <div id="menu" onClick={myFunction} className="fas fa-bars" ></div>
        <nav className="navbar">
            <ul>
              <li><a className="active" href="#home">home</a></li>
              <li><a href="#arrival">arrival</a></li>
              <li><a href="#featured">featured</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#deal">deal</a></li>
            </ul>
        </nav>
        <div className="icons">
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
          <a href="#" className="fas fa-user"></a>
        </div>
      </div>
          <nav id="navbarBar" className="navbarBars">
          <ul>
                <li><a className="active" href="#home">home</a></li>
                <li><a href="#arrival">arrival</a></li>
                <li><a href="#featured">featured</a></li>
                <li><a href="#gallery">gallery</a></li>
                <li><a href="#deal">deal</a></li>
              </ul>
          </nav>
    </header>
  );
};

export default Header;
