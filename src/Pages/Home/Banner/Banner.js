import React from "react";
import "./Banner.css";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className='px-20 py-32 bannerBG'>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={chair} className='w-1/2 rounded-lg shadow-2xl' alt='' />
          <div className='w-1/2'>
            <h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
            <p className='py-6 text-muteText'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className='btn btn-primary font-bold text-base-100 bg-gradient-to-l from-primary to-secondary'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
