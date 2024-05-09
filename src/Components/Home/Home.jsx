import React from "react";
import "./Home.css";
import "../Categories/BestSellers/BestSellers.jsx";
import BestSellers from "../Categories/BestSellers/BestSellers.jsx";
import main from './main.png';

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="home-title">
          <div className="home-heading">
            <div>
              <p>&#10095; Find Your Next Book</p>
            </div>
          </div>
          <div className="home-reading">
            <p>Our most popular and trending <span>On.Book</span> perfect</p>
          </div>
          <div className="home-reading"><p>Not sure what to read now next reading mood perfectly</p></div>
          <div className="explore">
            <button>Explore Now</button>
          </div>
        </div>
        <div className="home-carousell">
          <img src={main} alt="" sizes="" />
        </div>
      </div>
      <BestSellers />
    </>
  );
};

export default Home;
