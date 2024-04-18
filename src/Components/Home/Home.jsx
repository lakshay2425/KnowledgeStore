import React from "react";
import "./Home.css";
import "../Categories/BestSellers/BestSellers.jsx";
import BestSellers from "../Categories/BestSellers/BestSellers.jsx";
const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="home-title">
          <div className="home-heading">
            <div>
              <span>Find Your </span> Next Book
            </div>
          </div>
          <div className="home-reading">
            Our most popular and trending <span>On.Book</span> perfect
            <div>Not sure what to read now next reading mood perfectly</div>
          </div>
          <button type="button" className="explore">
            Explore Now
          </button>
        </div>
        <div className="home-carousell"></div>
      </div>
      <BestSellers />
    </>
  );
};

export default Home;
