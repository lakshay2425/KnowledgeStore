import React from "react";
import "./Home.css";
import BestSellers from "../Categories/BestSellers.jsx";
import main from './main.png';

const Home = () => {
  return (
    <>
      <div className="home-section max-md:flex-col-reverse">
        <div className="home-title max-md:flex max-md:w-full max-md:text-7xl">
          <div className="home-heading max-md:max-w- ">
            <div className="">
              <p className="">&#10095; Find Your Next Book</p>
            </div>
          </div>
          <div className="home-reading max-md:w-full max-md:leading-normal max-md:text-sm">
            <p>Our most popular and trending <span>On.Book</span> perfect . </p>
            <p>Not sure what to read now next reading mood perfectly .</p>
            <div className="explore">
              <button>Explore Now</button>
            </div>
          </div>


        </div>
        <div className=" max-md:">
          <img src={main} alt="" sizes="" className="object-cover" />
        </div>
      </div>
      <BestSellers />
    </>
  );
};

export default Home;
